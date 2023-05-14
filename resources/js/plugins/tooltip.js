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
        'x-data'() {
            return {
                __delayInterval: null,
                __durationInterval: null,
                __interactive: options.interactive,
                __showAndHandleDelay() {
                    this.__delayInterval = setTimeout(() => {
                        this.__show();
                    }, options.delay);
                },
                __hideAndHandleDelay() {
                    clearInterval(this.__delayInterval);
                    this.__hide();
                },
                __closestEdge(mouse, targetEl) {
                    const elClientRect = targetEl.getBoundingClientRect();

                    const elLeftEdge = elClientRect.left;
                    const elTopEdge = elClientRect.top;
                    const elRightEdge = elClientRect.right;
                    const elBottomEdge = elClientRect.bottom;

                    const mouseX = mouse.pageX;
                    const mouseY = mouse.pageY;

                    const topEdgeDist = Math.abs(elTopEdge - mouseY);
                    const bottomEdgeDist = Math.abs(elBottomEdge - mouseY);
                    const leftEdgeDist = Math.abs(elLeftEdge - mouseX);
                    const rightEdgeDist = Math.abs(elRightEdge - mouseX);

                    const minDist = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);

                    switch (minDist) {
                        case leftEdgeDist:
                            return 'left';
                        case rightEdgeDist:
                            return 'right';
                        case topEdgeDist:
                            return 'top';
                        case bottomEdgeDist:
                            return 'bottom';
                    }
                }
            }
        },
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
            if(this.$data.__interactive) {
                // placement side of tooltip
                const placementSide = this.$data.__placementSide;

                // leaving side of mouse
                const mouseLeavingSide = this.$data.__closestEdge(mouse, el);

                // check if mouse leaving from trigger to tooltip
                if(placementSide === mouseLeavingSide) {
                    return;
                }
            }

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
        'x-on:click.away'() {
            this.$data.__interactive && this.$data.__hide()
        },
        'x-on:mouseleave'(mouse) {
            // handle interactive tooltip
            if(this.$data.__interactive) {
                // placement side of tooltip
                const placementSide = this.$data.__placementSide;

                // leaving side of mouse
                const mouseLeavingSide = this.$data.__closestEdge(mouse, el);
                const reversedDirection = {
                    'bottom': 'top',
                    'top': 'bottom',
                    'left': 'right',
                    'right': 'left',
                }[placementSide] ?? null;

                // check if mouse leaving from tooltip to trigger
                if(reversedDirection === mouseLeavingSide) {
                    return;
                }
            }
            this.$data.__hideAndHandleDelay()
        }
    });
}