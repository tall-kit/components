export default function (Alpine) {
    Alpine.directive('tooltip', (el, {value, expression}, {evaluate, cleanup}) => {
        if (!value) handleRoot(el, expression, evaluate, cleanup, Alpine);
        else if (value === 'trigger') handleTrigger(el, Alpine);
        else if (value === 'content') handleContent(el, Alpine);
    }).before('bind');

    Alpine.magic('tooltip', el => {
        const $data = Alpine.$data(el);
        return {
            ...$data.$floating,
            showForDuration(duration) {
                $data.__show();

                if (duration) {
                    clearInterval($data.__durationInterval);
                    $data.__durationInterval = setTimeout(() => {
                        $data.__hide();
                    }, duration);
                }
            },
        }
    });
}

function handleRoot(el, expression, evaluate, cleanup, Alpine) {
    let options = {};
    if (expression) {
        Object.assign(options, evaluate(expression))
    }

    Alpine.bind(el, {
        'x-floating'() {
            return options;
        },
        'x-id'() {
            return ['tooltip-content']
        },
        'x-data'() {
            return {
                __delayInterval: null,
                __durationInterval: null,
                __showAndHandleDelay() {
                    this.__delayInterval = setTimeout(() => {
                        this.__show();
                    }, options.delay);
                },
                __hideAndHandleDelay() {
                    clearInterval(this.__delayInterval);
                    this.__hide();
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
        'x-bind:aria-describedby'() {
            return this.$id('tooltip-content')
        },

        'x-on:mouseenter'() {
            this.$data.__showAndHandleDelay();
        },
        'x-on:focus'() {
            this.$data.__show();
        },
        'x-on:mouseleave'() {
            this.$data.__hideAndHandleDelay();
        },
        'x-on:blur'() {
            this.$data.__hideAndHandleDelay();
        },
        'x-on:keydown.escape.stop.prevent'() {
            this.$data.__hideAndHandleDelay();
        },
    });
}

function handleContent(el, Alpine) {
    Alpine.bind(el, {
        'role': 'tooltip',
        'x-floating:content'() {
            //
        },
        'x-bind:id'() {
            return this.$id('tooltip-content')
        },
    });
}