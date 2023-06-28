export default function (Alpine) {
    Alpine.directive('spinbutton', (el, directive) => {
        if (!directive.value) handleSpinbutton(el, Alpine)
    }).before('bind');
}

function handleSpinbutton(el, Alpine) {
    Alpine.bind(el, {
        'role': 'spinbutton',
        'taxindex': '0',
        'contenteditable': 'true',
        'spellcheck': 'false',
        'autocapitalize': 'off',
        'autocorrect': 'off',
        'enterkeyhint': 'next',
        'inputmode': 'numeric',

        'x-data'() {
            return {
                __min: null,
                __max: null,
                __value: null,
                __step: null,
                __isActive: false,
                init() {
                    queueMicrotask(() => {
                        this.__value = Alpine.bound(el, 'value', null);
                        this.__min = Alpine.bound(el, 'min', null);
                        this.__max = Alpine.bound(el, 'max', null);
                        this.__step = Alpine.bound(el, 'step', null);
                    })
                },
                __handleValue(value) {
                    value = parseInt(value);
                    if (this.__min !== null && value < this.__min) value = this.__min;
                    if (this.__max !== null && value > this.__max) value = this.__max;
                    if (value !== this.__value) {
                        this.__value = value;
                        this.$dispatch('change');
                    }
                },
                __getNextValue(value) {
                    let multipler = this.__value ? parseInt(this.__value) : 0;

                    return multipler * 10 + value;
                },
                __findNextSpinbutton() {
                    let next = el.nextElementSibling;
                    while (next) {
                        if (next.getAttribute('role') === 'spinbutton') return next;
                        next = next.nextElementSibling;
                    }

                    return null;
                },
                __findPreviousSpinbutton() {
                    let previous = el.previousElementSibling;
                    while (previous) {
                        if (previous.getAttribute('role') === 'spinbutton') return previous;
                        previous = previous.previousElementSibling;
                    }

                    return null;
                },
                __subValue() {
                    if (this.__value !== null) {
                        // remove last digit from number
                        let newValue = parseInt(this.__value.toString().slice(0, -1));
                        this.__value = isNaN(newValue) ? null : newValue;
                        this.$dispatch('change');
                    }
                },
            }
        },

        'x-bind:aria-valuenow'() {
            return this.__value;
        },
        'x-bind:aria-valuemin'() {
            return this.__min;
        },
        'x-bind:aria-valuemax'() {
            return this.__max;
        },

        'x-on:keypress.stop.prevent'(event) {
            if (isNaN(event.key) || event.code === 'Space') {
                return;
            }

            // reset value if next value will definitely equal or greater max
            if (this.__max !== null && this.__getNextValue(0) >= this.__max) {
                this.__value = null;
            }

            this.__handleValue(this.__getNextValue(parseInt(event.key)));

            if (this.__max !== null && this.__getNextValue(0) >= this.__max) {
                let nextSpinbutton = this.__findNextSpinbutton();
                if (nextSpinbutton) {
                    this.$nextTick(() => {
                        nextSpinbutton.focus({preventScroll: true})
                    });
                }
            }
        },

        'x-on:keydown.backspace.stop.prevent'() {
            this.__subValue();
        },

        'x-on:keydown.delete.stop.prevent'() {
            this.__subValue();
        },

        'x-on:keydown.up.stop.prevent'() {
            let nextValue = parseInt(this.__value ?? '0') + 1;
            if (this.__max !== null && nextValue > this.__max) nextValue = this.__min;
            this.__handleValue(nextValue);
        },

        'x-on:keydown.down.stop.prevent'() {
            let nextValue = parseInt(this.__value ?? '0') - 1;
            if (this.__min !== null && nextValue < this.__min) nextValue = this.__max;
            this.__handleValue(nextValue);
        },

        'x-on:keydown.right.stop.prevent'() {
            let nextSpinbutton = this.__findNextSpinbutton();
            if (nextSpinbutton) {
                this.$nextTick(() => {
                    nextSpinbutton.focus({preventScroll: true})
                });
            }
        },

        'x-on:keydown.left.stop.prevent'() {
            let previousSpinbutton = this.__findPreviousSpinbutton();
            if (previousSpinbutton) {
                this.$nextTick(() => {
                    previousSpinbutton.focus({preventScroll: true})
                });
            }
        },
        'x-on:focus'() {
            this.__isActive = true;
        },
        'x-on:blur'() {
            this.__isActive = false;
        },
    })
}