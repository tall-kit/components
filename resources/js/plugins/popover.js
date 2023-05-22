
export default function (Alpine) {
    Alpine.directive('popover', (el, {value, expression}, {evaluate}) => {
        if (!value) handleRoot(el, expression, evaluate, Alpine);
        else if (value === 'trigger') handleTrigger(el, Alpine);
        else if (value === 'content') handleContent(el, Alpine);
    }).before('bind');

    Alpine.magic('popover', el => {
        const $data = Alpine.$data(el);
        return {
            ...$data.$floating,
            showAndFocus() {
                $data.__showAndHandleFocus();
            },
            hideAndFocus() {
                $data.__hideAndHandleFocus();
            },
        }
    });
}

function handleRoot(el, expression, evaluate, Alpine) {
    let options = {
        placement: 'top',
        offset: 12,
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
            return ['popover-content']
        },
        'x-data'() {
            return {
                __triggerEl: null,
                __showAndHandleFocus() {
                    this.__show();
                    this.$nextTick(() => {
                        let firstFocusable = this.$focus.within(this.__floatingEl).getFirst();
                        if(firstFocusable) this.$focus.focus(firstFocusable);
                    });
                },
                __hideAndHandleFocus() {
                    this.__hide();

                    // focus trigger element if no other element outside of popover has already been focused by user
                    if(!document.hasFocus() || this.$focus.within(this.__floatingEl).focused()) {
                        this.$nextTick(() => {
                            this.$focus.focus(this.__triggerEl);
                        });
                    }
                },
            }
        }
    });
}

function handleTrigger(el, Alpine) {
    Alpine.bind(el, {
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
            return this.$data.__isShown && this.$id('popover-content');
        },

        'x-on:click'() {
            this.$data.__isShown ? this.$data.__hideAndHandleFocus() : this.$data.__showAndHandleFocus();
        },
        'x-on:keydown.escape.stop.prevent'() {
            this.$data.__hide();
        },
    });
}

function handleContent(el, Alpine) {
    Alpine.bind(el, {
        'role': 'dialog',

        'tabindex': '-1',

        'x-floating:content'() {
            //
        },

        'x-bind:id'() {
            return this.$id('popover-content')
        },

        'x-on:click.outside'() {
            this.$data.__hide();
        },
        'x-on:keydown.escape.stop.prevent'() {
            this.$data.__hideAndHandleFocus();
        },
    });
}