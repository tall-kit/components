export default function (Alpine) {
    Alpine.directive('menu', (el, directive, {evaluate}) => {
        if(!directive.value) handleMenu(el, Alpine)
        else if(directive.value === 'item') handleItem(el, Alpine)
        else if(directive.value === 'submenu') handleSubmenu(el, Alpine)
        else if(directive.value === 'content') handleContent(el, Alpine)
        else if(directive.value === 'trigger') handleTrigger(el, Alpine)
        else if(directive.value === 'dropdown') handleDropdown(el, directive.expression, evaluate, Alpine)
    }).before('bind');


    Alpine.magic('menuitem', el => {
        const isMenuitem = Alpine.bound(el, 'role') === 'menuitem';
        if(!isMenuitem) {
            const menuitemEl = el.closest('[x-menu\\:item]');
            if(menuitemEl) el = menuitemEl;
        }
        // TODO v3 check
        // livewire fix: after update undefined
        const state = typeof Alpine.$data(el).__getState === 'undefined' ? {
            active: false,
            disabled: false,
            expanded: false,
        } : Alpine.$data(el).__getState(el);

        return {
            get isActive() {
                return state.active;
            },
            get isDisabled() {
                return state.disabled;
            },
            get isExpanded() {
                return state.expanded;
            },
        }
    });

    Alpine.magic('dropdownMenu', el => {
        if(!el.hasAttribute('[x-menu\\:dropdown]')) {
            // get top dropdown trigger element
            el = Alpine.$data(el).__triggerEl;
        }
        const $data = Alpine.$data(el);
        return {
            ...$data.$floating,
            hideAndFocus() {
                $data.__hideAndHandleFocus();
            }
        }
    });

    Alpine.magic('submenu', el => {
        const $data = Alpine.$data(el);
        return {
            ...$data.$floating,
        }
    })
}

function handleMenu(el, Alpine) {
    Alpine.bind(el, {
        'role': 'menu',
        'aria-orientation': 'vertical',
        'x-data'() {
            return {
                __itemStates: new Map(),
                __activeEl: null,
                __firstItemEl: null,
                __lastItemEl: null,
                __getState(itemEl) {
                    return this.__itemStates.get(itemEl) ?? {
                        active: false,
                        expanded: false,
                        disabled: false
                    }
                },
                __activateFirstItem() {
                    if(this.__activeEl) Alpine.$data(this.__activeEl).__deactivate();

                    this.__activateNextItem(el.firstElementChild);
                },
                __activateLastItem() {
                    if(this.__activeEl) Alpine.$data(this.__activeEl).__deactivate();

                    this.__activatePreviousItem(el.lastElementChild);
                },
                __activateNextItem(nextEl) {
                    while(nextEl) {
                        const isDisabled = nextEl.getAttribute('disabled') === 'disabled';
                        const isMenuitem = nextEl.getAttribute('role') === 'menuitem';
                        if(isMenuitem && !isDisabled) {
                            return Alpine.$data(nextEl).__activate();
                        }
                        nextEl = nextEl.nextElementSibling;
                    }
                },
                __activatePreviousItem(previousEl) {
                    while(previousEl) {
                        const isDisabled = previousEl.getAttribute('disabled') === 'disabled';
                        const isMenuitem = previousEl.getAttribute('role') === 'menuitem';
                        if(isMenuitem && !isDisabled) {
                            Alpine.$data(previousEl).__activate()
                            break;
                        }
                        previousEl = previousEl.previousElementSibling;
                    }
                }
            }
        },

        'x-on:keydown.down.stop.prevent'() {
            this.__activeEl ?
                this.__activateNextItem(this.__activeEl.nextElementSibling) :
                this.__activateFirstItem();
        },
        'x-on:keydown.up.stop.prevent'() {
            this.__activeEl ?
                this.__activatePreviousItem(this.__activeEl.previousElementSibling) :
                this.__activateLastItem();
        },
        'x-on:click.outside.stop.prevent'() {
            if(this.__activeEl) Alpine.$data(this.__activeEl).__deactivate();
        },
    })
}


function handleItem(el, Alpine) {
    // TODO v3 check
    // livewire fix: after update undefined
    if(typeof Alpine.$data(el).__getState === 'undefined') return;

    Alpine.bind(el, {
        'role': 'menuitem',
        'aria-orientation': 'vertical',
        'x-data'() {
            return {
                init() {
                    const disabled = Alpine.bound(el, 'disabled', false);
                    if(disabled) return this.__disable();

                    if(!this.$data.__firstItemEl) this.$data.__firstItemEl = el;
                    this.$data.__lastItemEl = el;
                },
                __activate() {
                    // item already active
                    if(this.$data.__activeEl === el) return;
                    if(this.$data.__getState(el).disabled) return;

                    if(this.$data.__activeEl) Alpine.$data(this.$data.__activeEl).__deactivate();

                    this.$data.__activeEl = el;

                    this.$data.__itemStates.set(el, {
                        active: true,
                        disabled: false,
                        expanded: false
                    })
                    this.$nextTick(() => {
                        el.focus();
                    })
                },
                __deactivate() {
                    if(this.$data.__getState(el).disabled) return;

                    el.blur();
                    this.$data.__itemStates.delete(el);
                    if(this.$data.__activeEl === el) this.$data.__activeEl = null;
                },
                __disable() {
                    Alpine.bind(el, {
                        'disabled': 'true'
                    });
                    this.__itemStates.set(el, {
                        active: false,
                        expanded: false,
                        disabled: true
                    })
                },
            }
        },
        'x-bind:aria-disabled'() {
            return this.$data.__getState(el).disabled;
        },
        'x-bind:tabindex'() {
            const state = this.$data.__getState(el);
            if(state.disabled) return undefined;

            return state.active ? '0' : '-1';
        },
        'x-on:click.stop'() {
           // prevent the dropdown menu from closing
        },
        'x-on:mousemove'() {
            this.__activate()
        },
        'x-on:mouseleave'() {
            this.__deactivate()
        },
        'x-on:blur'() {
            const state = this.$data.__getState(el);
            if(state.active) this.$data.__itemStates.delete(el);
        },
    })
}

function handleSubmenu(el, Alpine) {
    Alpine.bind(el, {
        'role': 'menuitem',
        'aria-orientation': 'vertical',
        'aria-haspopup': 'menu',
        'x-data'() {
            return {
                init() {
                    const disabled = Alpine.bound(el, 'disabled', false);
                    if(disabled) return this.$data.__disable(el);
                },
                __activate(expand = false) {
                    const state = this.$data.__getState(el);
                    if(state.disabled) return;

                    // item already active and expanded
                    if(this.$data.__activeEl === el && state.expanded === expand) {
                        el.focus();
                        return;
                    }

                    if(this.$data.__activeEl) Alpine.$data(this.$data.__activeEl).__deactivate();

                    this.$data.__activeEl = el;

                    this.$data.__itemStates.set(el, {
                        active: true,
                        disabled: false,
                        expanded: expand
                    })
                    this.$nextTick(() => {
                        el.focus();
                    })
                    if(expand) this.$submenu.show();
                },
                __expand() {
                    this.__activate(true);
                },
                __expandAndHandleFocus() {
                    // find submenu element
                    const submenuEl = this.__floatingEl.querySelector('[x-menu]');
                    if(!submenuEl) return;

                    // expand submenu
                    Alpine.$data(this.__floatingEl).__show();
                    Alpine.$data(submenuEl).__activateFirstItem();
                },
                __collapse() {
                    this.__deactivate();
                    this.__activate(false);
                },
                __deactivate() {
                    if(this.$data.__getState(el).disabled) return;
                    el.blur();
                    this.$data.__itemStates.delete(el);
                    if(this.$data.__activeEl === el) this.$data.__activeEl = null;
                    this.$submenu.hide();
                },
                __disable() {
                    Alpine.bind(el, {
                        'disabled': 'true'
                    });
                    this.__itemStates.set(el, {
                        active: false,
                        expanded: false,
                        disabled: true
                    })
                },
            }
        },
        'x-bind:aria-expanded'() {
            return this.$data.__getState(el).expanded;
        },
        'x-bind:aria-disabled'() {
            return this.$data.__getState(el).disabled;
        },
        'x-bind:tabindex'() {
            const state = this.$data.__getState(el);
            if(state.disabled) return undefined;

            return state.active ? '0' : '-1';
        },
        'x-on:click.stop'() {
            // prevent the dropdown menu from closing
        },
        'x-on:mousemove'() {
            this.__expand();
        },
        'x-on:keydown.right.stop.prevent'() {
            this.__expandAndHandleFocus();
        },
        'x-on:keydown.enter.stop.prevent'() {
            this.__expandAndHandleFocus();
        },
        'x-on:keydown.space.stop.prevent'() {
            this.__expandAndHandleFocus();
        },
        'x-on:floating-disappear'() {
            if(this.$data.__activeEl) Alpine.$data(this.$data.__activeEl).__deactivate()
        },
        'x-on:floating-hide'() {
            if(this.$data.__activeEl) Alpine.$data(this.$data.__activeEl).__deactivate()
        },
        'x-floating'() {
            return {
                placement: 'right-start',
                shift: false,
                offset: 2
            }
        },
        'x-floating:reference'() {
            //
        },
    })
}


function handleDropdown(el, expression, evaluate, Alpine) {
    let options = {
        placement: 'bottom-start',
        offset: 2,
        flip: true,
        shift: true,
    };
    if (expression) {
        Object.assign(options, evaluate(expression))
    }

    Alpine.bind(el, {
        'x-floating'() {
            return options;
        },
        'x-id'() {
            return ['dropdown-content']
        },
        'x-data'() {
            return {
                __triggerEl: null,
                __hideAndHandleFocus() {
                    this.$data.__hide();
                    this.$nextTick(() => {
                        this.__triggerEl.focus({preventScroll: true});
                    });
                },
                __toggle() {
                    if(this.$data.__isShown) {
                        this.$data.__hide();
                    } else {
                        // button should not be focused
                        this.__triggerEl.blur();
                        // open dropdown menu
                        this.__show();
                        // focus dropdown element
                        this.$nextTick(() => {
                            this.__floatingEl.focus();
                        })
                    }
                },
                __showAndFocusFirstItem() {
                    // button should not be focused
                    this.__triggerEl.blur();
                    // open dropdown menu
                    this.__show();
                    // find first tabbable menu item
                    const menuEl = this.$data.__floatingEl.querySelector('[x-menu]');
                    // activate item / focus
                    const menuFirstItemEl = Alpine.$data(menuEl).__firstItemEl;
                    Alpine.$data(menuFirstItemEl).__activate()
                },
            }
        },
    });
}

function handleTrigger(el, Alpine) {
    Alpine.bind(el, {
        'aria-haspopup': 'menu',
        'x-floating:reference'() {
            //
        },
        'x-init'() {
            this.__triggerEl = el;
        },
        'x-bind:aria-expanded'() {
            return this.$data.__isShown;
        },
        'x-bind:aria-controls'() {
            return this.$data.__isShown && this.$id('dropdown-content');
        },

        'x-on:click'() {
            this.$data.__toggle();
        },
        'x-on:keydown.space.prevent.stop'() {
            this.$data.__showAndFocusFirstItem();
        },
        'x-on:keydown.enter.prevent.stop'() {
            this.$data.__showAndFocusFirstItem();
        },
    });
}

function handleContent(el, Alpine) {
    Alpine.bind(el, {
        'tabindex': '0',

        'x-floating:content'() {
            //
        },

        'x-bind:id'() {
            return this.$id('dropdown-content')
        },

        'x-on:click.outside.stop.prevent'() {
            this.$dropdownMenu.hideAndFocus();
        },
        'x-on:keydown.escape.stop.prevent'() {
            this.$dropdownMenu.hideAndFocus();
        },

        'x-on:keydown.down.stop.prevent'() {
            const menuEl = this.__floatingEl.querySelector('[x-menu]');
            Alpine.$data(menuEl).__activateFirstItem();
        },

        'x-on:keydown.up.stop.prevent'() {
            const menuEl = this.__floatingEl.querySelector('[x-menu]');
            Alpine.$data(menuEl).__activateLastItem();
        },
        'x-on:keydown.left.stop.prevent'() {
            // check if current floating content is in submenu and has parent menu
            const parentMenuEl = this.__referenceEl.closest('[x-menu]');
            if(!parentMenuEl) return;

            // deactivate active item of submenu
            const submenuEl = this.__floatingEl.querySelector('[x-menu]');
            if(submenuEl) {
                const submenuActiveEl = Alpine.$data(submenuEl).__activeEl;
                if(submenuActiveEl) Alpine.$data(submenuActiveEl).__deactivate();
            }

            // collapse submenu by active menuitem
            if(this.__activeEl) Alpine.$data(this.__activeEl).__collapse();
        }
    });
}