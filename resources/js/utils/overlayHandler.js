import { computePosition, flip, shift, offset, arrow, autoUpdate } from "@floating-ui/dom";
import { animationHandler } from "./animationHandler.js";
import { animate, easeInOut } from "popmotion";

export function overlayHandler(el, options) {
    return {
        _show: false,
        _opacity: false,
        _translateX: false,
        _translateY: false,
        _placementSide: 'top',
        _animationHandler: animationHandler(),
        _autoUpdateHandler: null,
        _options: options,
        _el: el,
        _arrowEl: null,


        _duration: 100,
        _instance: null,

        show(triggerEl) {
            this._show = true;
            this._animationHandler.start();
            this._placementSide = this._options.placement.split('-')[0];

            // init position
            const overlayOptions = {
                placement: this._options.placement,
                middleware: [
                    offset(this._options.offset),
                    this._options.flip && flip(),
                    this._options.shift && shift({ padding: 5 }),
                    this._arrowEl && arrow({ element: this._arrowEl }),
                ],
            };

            const runCompute = () => {
                computePosition(triggerEl, this._el, overlayOptions).then(({x, y, placement, middlewareData}) => {
                    this._placementSide = placement.split('-')[0];
                    Object.assign(this._el.style, {
                        left: `${x}px`,
                        top: `${y}px`,
                    });

                    // handle arrow position
                    if (this._arrowEl) {
                        const { x: arrowX, y: arrowY} = middlewareData.arrow;

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
            this._autoUpdateHandler = autoUpdate(triggerEl, this._el, () => runCompute());

            this._instance = animate({
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
                duration: this._duration,
                onUpdate: (latest) => {
                    this._opacity = latest.opacity;
                    this._translateY = latest.translateY;
                    this._translateX = latest.translateX;
                },
                onComplete: () => {
                    this._animationHandler.release();
                },
                onStop: () => {
                    this._animationHandler.clearPendingActions();
                }
            });
        },
        hide() {
            this._instance.stop();
            animate({
                from: {
                    opacity: this._opacity,
                },
                to: {
                    opacity: 0,
                },
                ease: easeInOut,
                duration: this._duration / 2,
                onUpdate: (latest) => {
                    this._opacity = latest.opacity;
                },
                onComplete: () => {
                    this._show = false;
                    this.cleanup();
                }
            });
        },
        toggle(triggerEl) {
            this._show ? this.hide() : this.show(triggerEl);
        },
        cleanup() {
            this._releaseAutoUpdateHandler()
        },
        get styles() {
            return {
                display: this._show ? 'block' : 'none',
                opacity: this._opacity,
                transform: `translate(${this._translateX}px, ${this._translateY}px)`,
                pointerEvents: this._animationHandler.isBusy ? 'none': 'auto'
            }
        },
        _releaseAutoUpdateHandler() {
            typeof this._autoUpdateHandler === 'function' && this._autoUpdateHandler();
        }
    }
}