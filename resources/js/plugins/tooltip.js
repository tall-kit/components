import { computePosition, flip, shift, offset, arrow, autoUpdate } from "@floating-ui/dom";
import { animate, easeInOut } from "popmotion"
import { animationHandler } from "../utils/animationHandler.js";

export default function (Alpine) {
    const activeTooltips = new Map();

    Alpine.directive('tooltip', Alpine.skipDuringClone((el, {value, expression}, {evaluate, cleanup}) => {
        if(value === null) handleTooltip(el, evaluate(expression || '{}'), cleanup, Alpine, activeTooltips);
        else if(value === 'trigger') handleTooltipTrigger(el, evaluate(expression || '{}'), Alpine);
        else if(value === 'reference') handleTooltipReference(el, Alpine);
        else if(value === 'arrow') handleTooltipArrow(el, Alpine);
    })).before('bind');

    Alpine.magic('tooltip', el => {
        const $data = Alpine.$data(el);

        return {
            show(duration) {
                const run = () => {
                    if(!$data.target) return;
                    Alpine.$data($data.target).show($data.trigger, duration);
                };
                if(!$data.target) $data.$nextTick(run);
                run();
            },
            hide() {
                if(!$data.target) return;
                Alpine.$data($data.target).hide();
            },
            get placementSide() {
                if(!$data.target) return 'top';
                return Alpine.$data($data.target).placementSide;
            }
        }
    });
}

function handleTooltipArrow(el, Alpine) {
    Alpine.bind(el, {
        'x-init'() {
            this.$data._arrowEl = el;
        }
    });
}

function handleTooltipReference(el, Alpine) {
    Alpine.bind(el, {
        'x-init'() {
            this.$data._referenceEl = el;
        }
    });
}

function handleTooltip(el, options, cleanup, Alpine, activeTooltips) {
    const tooltipOptions = {
        placement: 'top',
        offset: 6,
        flip: true,
        shift: true,
        ...options
    };

    Alpine.$data(el).target = el;

    const animationDuration = 100;

    Alpine.bind(el, {
        'role': 'tooltip',
        'x-data'() {
            return {
                show(triggerEl, duration) {
                    // show for specific duration in ms
                    if(duration) {
                        clearInterval(this._durationInterval);
                        this._durationInterval = setInterval(() => {
                            this.hide();
                        }, duration)
                    }
                    if(this._show) return this._animationHandler.clearPendingActions();
                    this._show = true

                    activeTooltips.set(el, this._show);
                    this._animationHandler.start();

                    this._opacity = 0;

                    // init position
                    const options = {
                        placement: tooltipOptions.placement,
                        middleware: [
                            offset(tooltipOptions.offset),
                            tooltipOptions.flip && flip(),
                            tooltipOptions.shift && shift({ padding: 5 }),
                            this._arrowEl && arrow({ element: this._arrowEl }),
                        ],
                    };

                    const runCompute = () => {
                        computePosition(triggerEl, el, options).then(({x, y, placement, middlewareData}) => {
                            this._placementSide = placement.split('-')[0];
                            Object.assign(el.style, {
                                left: `${x}px`,
                                top: `${y}px`,
                            });

                            // handle arrow position
                            if (this._arrowEl) {
                                const {x: arrowX, y: arrowY} = middlewareData.arrow;

                                const staticSide = {
                                    top: 'bottom',
                                    right: 'left',
                                    bottom: 'top',
                                    left: 'right',
                                }[placement.split('-')[0]];

                                Object.assign(this._arrowEl.style, {
                                    left: arrowX != null ? `${arrowX}px` : '',
                                    top: arrowY != null ? `${arrowY}px` : '',
                                    right: '',
                                    bottom: '',
                                    [staticSide]: '0px',
                                });
                            }
                        });
                    };

                    this._autoUpdateHandler = autoUpdate(triggerEl, el, () => runCompute())

                    animate({
                        from: {
                            opacity: 0,
                            translateY: {
                                'top': 10,
                                'bottom': -10,
                            }[this._placementSide] || 0,
                            translateX: {
                                'right': -10,
                                'left': 10,
                            }[this._placementSide] || 0
                        },
                        to: {
                            opacity: 1,
                            translateY: 0,
                            translateX: 0
                        },
                        ease: easeInOut,
                        duration: animationDuration,
                        onUpdate: (latest) => {
                            this._opacity = latest.opacity;
                            this._translateY = latest.translateY;
                            this._translateX = latest.translateX;
                        },
                        onComplete: () => {
                            this._animationHandler.release();
                        }
                    });

                    cleanup(() => this._releaseAutoUpdateHandler());
                },
                hide() {
                    this.$nextTick(() => {
                        this._animationHandler.afterRelease(() => {
                            this._show = false;
                            this._releaseAutoUpdateHandler();
                        });
                    })
                },
                get placementSide() {
                   return this._placementSide;
                },
                _show: false,
                _opacity: 0,
                _translateY: 0,
                _translateX: 0,
                _arrowEl: null,
                _placementSide: 'top',
                _autoUpdateHandler: null,
                _animationHandler: animationHandler(),
                _durationInterval: null,
                _releaseAutoUpdateHandler() {
                    typeof this._autoUpdateHandler === 'function' && this._autoUpdateHandler();
                }
            }
        },
        'x-bind:style'()  {
            return {
                display: this._show ? 'block' : 'none',
                opacity: this._opacity,
                transform: `translate(${this._translateX}px, ${this._translateY}px)`,
                pointerEvents: this._animationHandler.isBusy ? 'none': 'auto'
            }
        },
        'x-bind:id'() {
            return this.$id('tooltip')
        },
    });
}

function handleTooltipTrigger(el, options, Alpine) {
    const triggerOptions = {
        hover: true,
        focus: true,
        ...options
    };
    Alpine.bind(el, {
        'x-id'() {
            return ['tooltip']
        },
        'x-data'() {
            return {
                get target() {
                    return this._targetEl;
                },
                set target(el) {
                    this._targetEl = el;
                },
                get trigger() {
                    return this._referenceEl || el;
                },
                _targetEl: null,
                _referenceEl: null,
            }
        },
        'x-bind:aria-describedby'() {
            return this.$id('tooltip')
        },
        'x-on:mouseenter'() {
            triggerOptions.hover && this.$tooltip.show();
        },
        'x-on:mouseleave'() {
            triggerOptions.hover && this.$tooltip.hide();
        },
        'x-on:focusin'() {
            triggerOptions.focus && this.$tooltip.show();
        },
        'x-on:focusout'() {
            triggerOptions.focus && this.$tooltip.hide();
        },
        'x-on:keydown.escape.stop.prevent'() {
            triggerOptions.focus && this.$tooltip.hide();
        },
    });
}