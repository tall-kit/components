export default function (Alpine) {
    Alpine.directive('listbox', (el, directive, {evaluate}) => {
        if(!directive.value) handleListbox(el, Alpine)
        else if(directive.value === 'group') handleGroup(el, Alpine)
        else if(directive.value === 'option') handleOption(el, evaluate(directive.expression), Alpine)
        else if(directive.value === 'options') handleOptions(el, Alpine)
        else if(directive.value === 'trigger') handleTrigger(el, Alpine)
        else if(directive.value === 'dropdown') handleDropdown(el, directive.expression, evaluate, Alpine)
    }).before('bind');

    Alpine.magic('listbox', el => {
        const isListboxEl = el.hasAttribute('[x-listbox]');
        if(!isListboxEl) {
            const listboxEl = Alpine.$data(el).__listboxEl;
            if(listboxEl) el = listboxEl;
        }

        const $data = Alpine.$data(el);

        return {
            get selected() {
                const multiple = $data.__multiple ?? false;
                const selectedOptions = ($data.__selectedOptions ?? new Map());
                const selected = [];
                selectedOptions.forEach((data) => selected.push(data));

                return multiple ? selected : (selected[0] ?? null);
            },
        }
    });

    Alpine.magic('listboxOption', el => {
        const isOption = Alpine.bound(el, 'role') === 'option';
        if(!isOption) {
            const optionEl = el.closest('[x-listbox\\:option]');
            if(optionEl) el = optionEl;
        }

        let $data = Alpine.$data(el);
        let state = $data.__getState(el);

        return {
            get isActive() {
                return state.active;
            },
            get isSelected() {
                return state.selected;
            },
            get isDisabled() {
                return state.disabled;
            },
            ...$data.__data ?? {
                value: null,
                name: null
            }
        };
    });
}

function handleListbox(el, Alpine) {
    const inDropdown = el.closest('[x-listbox\\:dropdown]') !== null;

    if(inDropdown) {
        Alpine.bind(el, {
            'x-floating:content' () {
                //
            },
            'x-init'() {
                this.$data.__listboxEl = el;
            },
            'x-on:click.outside'() {
                this.$data.__hideAndHandleFocus();
            },
            'x-on:keydown.escape.stop.prevent'() {
                this.$data.__hideAndHandleFocus();
            },
            'x-on:change'() {
                if(!this.$data.__multiple) this.$data.__hideAndHandleFocus();
            },
        });
    }

    Alpine.bind(el, {
        'tabindex': '0',
        'role': 'listbox',
        'aria-orientation': 'vertical',

        'x-modelable': '__selectedValue',
        'x-data'() {
            return {
                __optionStates: new Map(),
                __selectedOptions: new Map(),
                __selectedValue: null,
                __activeOptionEl: null,
                __firstOptionEl: null,
                __lastOptionEl: null,
                __optionsEl: null,
                __multiple: false,
                init() {
                    queueMicrotask(() => {
                        this.__multiple = Alpine.bound(el, 'multiple-options', false);
                    });
                    this.$watch('__selectedValue', () => {
                        let nextOptionEl = this.__optionsEl.firstElementChild;

                        this.__iterateEnabledOptions(nextOptionEl, (optionEl) => {
                            Alpine.$data(optionEl).__syncStateWithSelectedModelable();
                        });
                    })
                },
                get __selected() {
                   return this.__multiple && this.__selectedValue ?
                       this.__selectedValue.map((value) => this.__buildSelectedOptionData(value)) :
                       this.__buildSelectedOptionData(this.__selectedValue);
                },
                __iterateEnabledOptions(nextEl, callback) {
                    if(!nextEl) return;

                    const parentGroupElement = nextEl.parentElement.getAttribute('role') === 'group' ?
                        nextEl.parentElement :
                        null;

                    while(nextEl) {
                        if(this.__isEnabledOption(nextEl)) {
                            callback(nextEl);
                        } else if(nextEl.getAttribute('role') === 'group') {
                            return this.__iterateEnabledOptions(nextEl.firstElementChild, callback);
                        }
                        nextEl = nextEl.nextElementSibling;
                    }

                    if(parentGroupElement) {
                        return this.__iterateEnabledOptions(parentGroupElement.nextElementSibling, callback);
                    }
                },
                __buildSelectedOptionData(value) {
                    return this.__selectedOptions.get(value);
                },
                __getState(optionEl) {
                    return this.__optionStates.get(optionEl) ?? {
                        active: false,
                        selected: false,
                        disabled: false
                    }
                },
                __activateFirstOption() {
                    if(this.__activeOptionEl) Alpine.$data(this.__activeOptionEl).__deactivate();

                    this.__activateNextOption(this.__optionsEl.firstElementChild);
                },
                __activateLastOption() {
                    if(this.__activeOptionEl) Alpine.$data(this.__activeOptionEl).__deactivate();

                    this.__activatePreviousOption(this.__optionsEl.lastElementChild);
                },
                __isEnabledOption(optionEl) {
                    const isDisabled = optionEl.getAttribute('disabled') === 'disabled';
                    const isOption = optionEl.getAttribute('role') === 'option';
                    return isOption && !isDisabled;
                },
                __activateNextOption(nextEl) {
                    if(!nextEl) return;

                    const parentGroupElement = nextEl.parentElement.getAttribute('role') === 'group' ?
                        nextEl.parentElement :
                        null;

                    while(nextEl) {
                        if(this.__isEnabledOption(nextEl)) {
                            return Alpine.$data(nextEl).__activate();
                        } else if(nextEl.getAttribute('role') === 'group') {
                            return this.__activateNextOption(nextEl.firstElementChild);
                        }
                        nextEl = nextEl.nextElementSibling;
                    }

                    if(parentGroupElement) {
                        return this.__activateNextOption(parentGroupElement.nextElementSibling);
                    }
                },
                __activatePreviousOption(previousEl) {
                    if(!previousEl) return;

                    const parentGroupElement = previousEl.parentElement.getAttribute('role') === 'group' ?
                        previousEl.parentElement :
                        null;

                    while(previousEl) {
                        if(this.__isEnabledOption(previousEl)) {
                            return Alpine.$data(previousEl).__activate()
                        } else if(previousEl.getAttribute('role') === 'group') {
                            return this.__activatePreviousOption(previousEl.lastElementChild);
                        }
                        previousEl = previousEl.previousElementSibling;
                    }

                    if(parentGroupElement) {
                        return this.__activatePreviousOption(parentGroupElement.previousElementSibling);
                    }
                },
                __activateSelectedOption() {
                    if(this.__activeOptionEl) Alpine.$data(this.__activeOptionEl).__deactivate();

                    this.__optionStates.forEach((optionState, optionEl) => {
                        if(!optionState.selected || optionState.disabled || this.__activeOptionEl) return;

                        Alpine.$data(optionEl).__activate();
                    });
                },
                __updateValue() {
                    let selectedValue = this.__multiple ? [] : null;
                    this.__optionStates.forEach((optionState, optionEl) => {
                        if(!optionState.selected) return;
                        this.__multiple ?
                            selectedValue.push(Alpine.$data(optionEl).__data.value) :
                            selectedValue = Alpine.$data(optionEl).__data.value;
                    });
                    if(this.__selectedValue !== selectedValue) {
                        this.__selectedValue = selectedValue;
                        this.$dispatch('change');
                    }
                },
            }
        },
        'x-on:keydown.down.stop.prevent'() {
            this.__activeOptionEl ?
                this.__activateNextOption(this.__activeOptionEl.nextElementSibling) :
                this.__activateFirstOption();
        },
        'x-on:keydown.up.stop.prevent'() {
            this.__activeOptionEl ?
                this.__activatePreviousOption(this.__activeOptionEl.previousElementSibling) :
                this.__activateLastOption();
        },
        'x-on:keydown.enter.stop.prevent'() {
            if(this.__activeOptionEl) Alpine.$data(this.__activeOptionEl).__select();
        },
        'x-on:keydown.space.stop.prevent'() {
            if(this.__activeOptionEl) Alpine.$data(this.__activeOptionEl).__select();
        },
    });
}

function handleGroup(el, Alpine) {
    Alpine.bind(el, {
        'role': 'group',
    });
}

function handleOption(el, optionData, Alpine) {
    Alpine.bind(el, {
        'tabindex': '-1',
        'role': 'option',

        'x-data'() {
            return {
                init() {
                    queueMicrotask(() => {
                        const disabled = Alpine.bound(el, 'disabled', false) || (optionData.disabled ?? false);
                        if(disabled) return this.__disable();

                        const selected = Alpine.bound(el, 'selected', false) || (optionData.selected ?? false);
                        if(selected) this.__select(false);
                    });
                },
                __value: null,
                __name: null,
                __data: optionData,
                __activate() {
                    // option already active
                    const $data = this.$data;
                    if($data.__activeOptionEl === el) return;
                    if($data.__getState(el).disabled) return;

                    if($data.__activeOptionEl) Alpine.$data($data.__activeOptionEl).__deactivate();

                    $data.__activeOptionEl = el;

                    $data.__optionStates.set(el, {
                        active: true,
                        disabled: false,
                        selected: $data.__getState(el).selected
                    });

                    this.$nextTick(() => {
                        $data.__activeOptionEl.scrollIntoView({
                            block: "nearest",
                        });
                    });
                },
                __deactivate() {
                    const $data = this.$data;
                    const state = $data.__getState(el);
                    if(state.disabled) return;

                    state.selected ? state.active = false : $data.__optionStates.delete(el);
                    if($data.__activeOptionEl === el) $data.__activeOptionEl = null;
                },
                __disable() {
                    const $data = this.$data;
                    Alpine.bind(el, {
                        'disabled': 'true'
                    });
                    $data.__optionStates.set(el, {
                        active: false,
                        selected: false,
                        disabled: true
                    })
                },
                __select(activate = true) {
                    const $data = this.$data;
                    const state = $data.__getState(el);
                    if(state.disabled) return;

                    if($data.__multiple) {
                        // TODO support for range selection (event.shiftKey = true)
                        $data.__optionStates.set(el, {
                            active: activate,
                            selected: !$data.__getState(el).selected,
                            disabled: false
                        })
                    } else {
                        $data.__optionStates.forEach((optionState, optionEl) => {
                            if(optionState.selected) {
                                this.__optionStates.delete(optionEl);
                            }
                        })
                        $data.__optionStates.set(el, {
                            active: activate,
                            selected: true,
                            disabled: false
                        })
                    }
                    $data.__updateValue();
                },
                __syncStateWithSelectedModelable() {
                    const $data = this.$data;
                    const state = $data.__getState(el);
                    if(state.disabled) return;

                    const isSelected = $data.__multiple ?
                        $data.__selectedValue.includes(this.__data.value) :
                        $data.__selectedValue === this.__data.value;

                    if(isSelected) {
                        $data.__optionStates.set(el, {
                            active: state.active,
                            selected: true,
                            disabled: state.disabled
                        });
                        $data.__selectedOptions.set(this.__data.value, this.__data);
                    } else {
                        $data.__optionStates.delete(el);
                        $data.__selectedOptions.delete(this.__data.value);
                    }
                }
            }
        },

        'x-bind:aria-disabled'() {
            return this.$data.__getState(el).disabled;
        },
        'x-bind:aria-selected'() {
            return this.$data.__getState(el).selected;
        },

        'x-on:mousemove'() {
            this.__activate()
        },
        'x-on:mouseleave'() {
            this.__deactivate()
        },
        'x-on:click'() {
            this.__select()
        },
    });
}

function handleOptions(el, Alpine) {
    Alpine.bind(el, {
        'x-init'() {
            this.$data.__optionsEl = el;
        }
    });
}

function handleDropdown(el, expression, evaluate, Alpine) {
    let options = {
        placement: 'bottom-start',
        offset: 2,
        flip: true,
        shift: false,
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
                __listboxEl: null,
                __hideAndHandleFocus() {
                    this.$data.__hide();
                    this.$nextTick(() => {
                        this.__triggerEl.focus({preventScroll: true});
                    });
                },
                __showAndActivateFirstOption() {
                    this.$data.__show();

                    if(!Alpine.$data(this.__listboxEl).__selectedValue) {
                        Alpine.$data(this.__listboxEl).__activateFirstOption();
                    }
                    this.$nextTick(() => {
                        this.__listboxEl.focus();
                    })
                },
                __toggle() {
                    if(this.$data.__isShown) {
                        this.$data.__hide();
                    } else {
                        // open dropdown menu
                        this.__show();
                        // focus dropdown element
                        this.$nextTick(() => {
                            // button should not be focused
                            this.__triggerEl.blur();
                            this.__listboxEl.focus();
                        })
                    }
                },
            }
        },

        'x-on:floating-show'() {
            Alpine.$data(this.__listboxEl).__activateSelectedOption();
        },
    });
}

function handleTrigger(el, Alpine) {
    Alpine.bind(el, {
        'aria-haspopup': 'true',
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
            this.$data.__showAndActivateFirstOption();
        },
        'x-on:keydown.enter.prevent.stop'() {
            this.$data.__showAndActivateFirstOption();
        },
        'x-on:keydown.down.stop.prevent'() {
            this.$data.__showAndActivateFirstOption();
        },
    });
}