import { overlayHandler } from "../utils/overlayHandler.js";

export default function (Alpine) {
    Alpine.directive('popover', Alpine.skipDuringClone((el, {value, expression}, {evaluate, cleanup}) => {
        if(value === null) handlePopover(el, evaluate(expression || '{}'), cleanup, Alpine);
        else if(value === 'trigger') handlePopoverTrigger(el, evaluate(expression || '[]'), Alpine);
        // else if(value === 'reference') handleTooltipReference(el, Alpine);
        // else if(value === 'arrow') handleTooltipArrow(el, Alpine);
    })).before('bind');

    Alpine.magic('popover', el => {
        const $data = Alpine.$data(el);

        return {
            toggle() {
                const run = () => {
                    if(!$data.target) return;
                    Alpine.$data($data.target).toggle();

                };
                $data.target ? run() : $data.$nextTick(run);
            }
            // hide() {
            //     if(!$data.target) return;
            //     Alpine.$data($data.target).hide();
            // },
            // get placementSide() {
            //     if(!$data.target) return 'top';
            //     return Alpine.$data($data.target).placementSide;
            // }
        }
    });
}

function handlePopover(el, options, cleanup, Alpine) {
    const popoverOptions = {
        placement: 'bottom',
        offset: 6,
        flip: true,
        shift: true,
        ...options
    };

    Alpine.$data(el).target = el;

    Alpine.bind(el, {
        'x-init'() {
            cleanup(() => this._handler.cleanup());
        },
        'x-data'() {
            return {
                _handler: overlayHandler(el, popoverOptions),
                toggle() {
                    this._handler.toggle(this.$data.trigger);
                }
            }
        },
        'x-bind:style'()  {
            return this._handler.styles
        },
    });
}

function handlePopoverTrigger(el, triggers, Alpine) {
    Alpine.bind(el, {
        'x-data'() {
            return {
                get target() {
                    return this._targetEl;
                },
                set target(el) {
                    this._targetEl = el;
                },
                get trigger() {
                    return el;
                },
                _targetEl: null,
            }
        },
        'x-bind:aria-expanded'() {
            return this.$data.__isShown;
        },
        'x-bind:aria-controls'() {
            return this.$data.__isShown && this.$id('popover-content');
        },

        'x-on:click'() {
            triggers.includes('click') && this.$popover.toggle();
        },
        'x-on:keydown.escape.stop.prevent'() {
            this.$data.__hide();
        },
    });
}