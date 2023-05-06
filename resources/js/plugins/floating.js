import {computePosition, flip, shift, offset, arrow, autoUpdate} from "@floating-ui/dom";

export default function (Alpine) {
    Alpine.directive('floating', (el, {value, expression}, {evaluate, cleanup}) => {
        if (!value) handleRoot(el, expression, evaluate, cleanup, Alpine);
        else if (value === 'reference') handleReference(el, Alpine);
        else if (value === 'content') handleContent(el, Alpine);
        else if (value === 'arrow') handleArrow(el, Alpine);
    }).before('bind');

    Alpine.magic('floating', el => {
        const $data = Alpine.$data(el);
        return {
            get isShown() {
                return $data.__isShown;
            },
            get placementSide() {
                return $data.__placement ? $data.__placement.split('-')[0] : null;
            },
            show() {
                $data.__show();
            },
            hide() {
                $data.__hide();
            }
        }
    });
}

function handleRoot(el, expression, evaluate, cleanup, Alpine) {
    let options = {
        placement: 'top',
        offset: 12,
        delay: 0,
        flip: true,
        shift: true,
        transition: true,
    };
    if (expression) {
        Object.assign(options, evaluate(expression))
    }

    Alpine.bind(el, {
        'x-data'() {
            return {
                init() {
                    cleanup(() => {
                        this.__hide();
                    });
                },
                __update() {
                    let floatingReference = this.__referenceEl ?? el;
                    if (!floatingReference || !this.__floatingEl) return;

                    computePosition(floatingReference, this.__floatingEl, {
                        placement: options.placement,
                        middleware: [
                            offset(options.offset),
                            options.flip && flip(),
                            options.shift && shift(),
                            this.__arrowEl && arrow({element: this.__arrowEl}),
                        ],
                    }).then(({x, y, placement, middlewareData}) => {
                        this.__placement = placement;
                        Object.assign(this.__floatingEl.style, {
                            left: `${x}px`,
                            top: `${y}px`,
                        });

                        // handle arrow position
                        if (this.__arrowEl) {
                            const {x: arrowX, y: arrowY} = middlewareData.arrow;

                            const staticSide = {
                                top: 'bottom',
                                right: 'left',
                                bottom: 'top',
                                left: 'right',
                            }[placement.split('-')[0]];

                            Object.assign(this.__arrowEl.style, {
                                left: arrowX != null ? `${arrowX}px` : '',
                                top: arrowY != null ? `${arrowY}px` : '',
                                right: '',
                                bottom: '',
                                [staticSide]: '0px',
                            });
                        }
                    })
                },
                __placement: options.placement,
                __isShown: false,
                __autoupdateCleanup: null,
                __referenceEl: null,
                __floatingEl: null,
                __arrowEl: null,
                __show() {
                    this.__isShown = true;
                    this.__update();
                    let floatingReference = this.__referenceEl ?? el;

                    if(!floatingReference || !this.__floatingEl) return;
                    this.__handleAutoupdateCleanup();
                    this.__autoupdateCleanup = autoUpdate(floatingReference, this.__floatingEl, () => {
                        this.__update();
                    });
                },
                __hide() {
                    this.__handleAutoupdateCleanup();
                    this.__isShown = false;
                },
                __handleAutoupdateCleanup() {
                    if (typeof this.__autoupdateCleanup === 'function') this.__autoupdateCleanup();
                }
            }
        }
    });
}

function handleArrow(el, Alpine) {
    Alpine.bind(el, {
        'x-init'() {
            this.__arrowEl = el;
        },
    });
}

function handleContent(el, Alpine) {
    Alpine.bind(el, {
        'x-init'() {
            this.__floatingEl = el;
        },
        'x-bind:style'() {
            return {
                display: this.$data.__isShown ? 'block' : '',
            };
        },
        'x-show'() {
            return this.$data.__isShown;
        },
    });
}

function handleReference(el, Alpine) {
    Alpine.bind(el, {
        'x-init'() {
            this.__referenceEl = el;
        },
    });
}