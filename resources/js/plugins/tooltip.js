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
    let options = {
        interactive: false
    };
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
        'x-effect'() {
            if(this.__inInteractiveArea) {
                document.addEventListener('mousemove', this.__interactiveEventListener);
            } else {
                document.removeEventListener('mousemove', this.__interactiveEventListener);
            }
        },
        'x-data'() {
            return {
                __delayInterval: null,
                __durationInterval: null,
                __inInteractiveArea: false,
                __interactiveEventListener (mouse) {
                    const $data = Alpine.$data(el);
                    if(!$data.__handleInteractiveArea(mouse)) $data.__hideAndHandleDelay();
                },
                __showAndHandleDelay() {
                    this.__delayInterval = setTimeout(() => {
                        this.__show();
                    }, options.delay);
                },
                __hideAndHandleDelay() {
                    clearInterval(this.__delayInterval);
                    this.__hide();
                },
                __handleInteractiveArea(mouse) {
                    if(!options.interactive) return false;

                    const mouseX = mouse.clientX;
                    const mouseY = mouse.clientY;
                    const referenceElRect = this.__referenceEl.getBoundingClientRect();
                    const floatingElRect = this.__floatingEl.getBoundingClientRect();

                    // build interactive area box for different placements

                    // default position top
                    let borderLeft = Math.min(floatingElRect.left, referenceElRect.left)
                    let borderRight = Math.max(floatingElRect.right, referenceElRect.right)
                    let borderTop = floatingElRect.top;
                    let borderBottom = referenceElRect.bottom;

                    switch (this.__placementSide) {
                        case 'bottom':
                            borderTop = referenceElRect.top;
                            borderBottom = floatingElRect.bottom;
                            break;
                        case 'left':
                            borderLeft = floatingElRect.left;
                            borderRight = referenceElRect.right;
                            borderTop = Math.min(floatingElRect.top, referenceElRect.top);
                            borderBottom = Math.min(floatingElRect.bottom, referenceElRect.bottom);
                            break;
                        case 'right':
                            borderLeft = referenceElRect.left;
                            borderRight = floatingElRect.right;
                            borderTop = Math.min(floatingElRect.top, referenceElRect.top);
                            borderBottom = Math.min(floatingElRect.bottom, referenceElRect.bottom);
                            break;
                    }

                    // check if mouse pointer is in interactive area box
                    const betweenVertical = mouseY >= borderTop && mouseY <= borderBottom;
                    const betweenHorizontal = mouseX >= borderLeft && mouseX <= borderRight;
                    return this.__inInteractiveArea = betweenVertical && betweenHorizontal;
                }
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
        'x-on:mouseleave'(mouse) {
            // handle interactive tooltip
            if (this.$data.__handleInteractiveArea(mouse)) return;

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