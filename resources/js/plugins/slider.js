export default function (Alpine) {
    Alpine.directive('slider', (el, directive) => {
        if(!directive.value) handleRoot(el, Alpine)
        else if(directive.value === 'thumb') handleThumb(el, Alpine)
        else if(directive.value === 'range') handleRange(el, Alpine)
    }).before('bind');

    Alpine.magic('thumb', el => {
        const $data = Alpine.$data(el);

        return {
            get value() {
                return $data.__value;
            }
        }
    });
}

function handleRoot(el, Alpine) {
    Alpine.bind(el, {
        'x-data'() {
            return {
                init() {
                    queueMicrotask(() => {
                        this.__min = parseFloat(Alpine.bound(this.$el, 'min', 0));
                        this.__max = parseFloat(Alpine.bound(this.$el, 'max', 100));
                        this.__step = parseFloat(Alpine.bound(this.$el, 'step', 1));
                    })
                },
                __min: 0,
                __max: 100,
                __step: 1,
                __values: [],
                __dragThumbEl: null,
                __thumbs: [],
                __currentPositionX(thumbEl) {
                    const sliderRect = el.getBoundingClientRect();
                    const trackWidthPerPercent = sliderRect.width / (this.__max - this.__min);

                    const trackPercentX = (this.$event.clientX - sliderRect.left) / (sliderRect.width / 100);
                    const multiplier = (trackPercentX - 50) / 100;
                    // add multipler of thumb offset to current client click position
                    const clientX = this.$event.clientX + multiplier * ( thumbEl ? thumbEl.getBoundingClientRect().width : 0 );

                    const trackPositionX = (clientX - sliderRect.left) / trackWidthPerPercent;

                    let currentPositionX = this.__min + trackPositionX;

                    currentPositionX = Math.max(this.__min, currentPositionX);
                    currentPositionX = Math.min(this.__max, currentPositionX);

                    return currentPositionX;
                },
                __setValue(value, index) {
                    const nextValidValue = value > this.__values[index] ?
                        this.__findNextPositiveValidValue(value, index) :
                        this.__findNextNegativeValidValue(value, index);

                    // current thumb value can't be larger than next thumb value
                    const nextIndex = index + 1;
                    if(nextIndex in this.__values && nextValidValue > this.__values[nextIndex]) {
                        this.__values[index] = this.__values[nextIndex];
                        return;
                    }

                    // current thumb value can't be less than previous thumb value
                    const prevIndex = index - 1;
                    if(prevIndex in this.__values && nextValidValue < this.__values[prevIndex]) {
                        this.__values[index] = this.__values[prevIndex];
                        return;
                    }

                    // set valid value
                    this.__values[index] = nextValidValue;
                },
                __findNextPositiveValidValue(value, index) {
                    let nearestValidValue = this.__values[index];
                    let nearestValidValueOffset = null;

                    for(let i = this.__values[index]; i <= this.__max; i += this.__step) {
                        const offsetToValue = Math.abs(i - value);
                        if(nearestValidValueOffset === null || offsetToValue < nearestValidValueOffset) {
                            nearestValidValue = i;
                            nearestValidValueOffset = offsetToValue;
                        }
                    }
                    return nearestValidValue;
                },
                __findNextNegativeValidValue(value, index) {
                    let nearestValidValue = this.__values[index];
                    let nearestValidValueOffset = null;

                    for(let i = this.__values[index]; i >= this.__min; i -= this.__step) {
                        const offsetToValue = Math.abs(i - value);
                        if(nearestValidValueOffset === null || offsetToValue < nearestValidValueOffset) {
                            nearestValidValue = i;
                            nearestValidValueOffset = offsetToValue;
                        }
                    }
                    return nearestValidValue;
                },
            }
        },
        'x-on:pointerdown'(e) {
            // accept only mouse left click
            if(e.pointerType === 'mouse' && e.button !== 0) return;

            // find the nearest thumb
            if(!this.__dragThumbEl) {
                let minValueOffsetRange = null;
                this.__thumbs.forEach((thumb, index) => {
                    const thumbValue = this.__values[index];
                    const currentPositionX = this.__currentPositionX(thumb);
                    const valueOffsetRange = Math.abs(currentPositionX - thumbValue);

                    if(minValueOffsetRange === null || valueOffsetRange <= minValueOffsetRange) {
                        this.__dragThumbEl = thumb;
                        minValueOffsetRange = valueOffsetRange;
                    }
                });
            }

            const $thumbData = Alpine.$data(this.__dragThumbEl);
            this.__setValue(this.__currentPositionX(this.__dragThumbEl), $thumbData.__index());

            this.$focus.focus(this.__dragThumbEl);
        },
        'x-on:pointermove.document'() {
            if(!this.__dragThumbEl) return;

            const $thumbData = Alpine.$data(this.__dragThumbEl);
            this.__setValue(this.__currentPositionX(this.__dragThumbEl), $thumbData.__index());
        },
        'x-on:pointerup.document'() {
            if(!this.__dragThumbEl) return;
            Alpine.$data(this.__dragThumbEl).__triggerChangeEvent()
            this.__dragThumbEl.blur();
            this.__dragThumbEl = null;
        }
    });
}

function handleThumb(el, Alpine) {
    const $data = Alpine.$data(el);
    const index = $data.__thumbs.push(el) - 1;

    Alpine.bind(el, {
        'role': 'slider',
        'tabindex': '0',
        'x-modelable': `__values[${index}]`,

        'x-data'() {
            return {
                __previousValue: null,
                init() {
                    queueMicrotask(() => {
                        this.__values[index] = parseFloat(Alpine.bound(this.$el, 'value', 0));
                    })
                },
                get __value() {
                   return this.__values[index];
                },
                __percentByValue() {
                    const trackRange = this.__max - this.__min;
                    return (this.__value - this.__min) * 100 / trackRange
                },
                __currentOffsetX() {
                    const multiplier = (this.__percentByValue() - 50) / 100;
                    return el.getBoundingClientRect().width * multiplier;
                },
                __nextValue() {
                    if(this.__max >= this.__value + this.__step) {
                        this.__setValue(this.__value + this.__step, index);
                        this.__triggerChangeEvent();
                    }
                },
                __prevValue() {
                    if(this.__min <= this.__value - this.__step) {
                        this.__setValue(this.__value - this.__step, index);
                        this.__triggerChangeEvent();
                    }
                },
                __index() {
                    return index;
                },
                __triggerChangeEvent() {
                    if(this.__previousValue !== this.__value) this.$dispatch('change');
                    this.__previousValue = this.__value;
                }
            }
        },

        'x-bind:aria-valuemin'() {
            return this.__min;
        },
        'x-bind:aria-valuemax'() {
            return this.__max;
        },
        'x-bind:aria-valuenow'() {
            return this.__values[index];
        },
        'x-bind:aria-valuetext'() {
            return this.__values[index];
        },
        'x-bind:style'() {
            const offsetX = this.__currentOffsetX();
            const calcType = offsetX >= 0 ? '-' : '+';

            return {
                left: `calc(${this.__percentByValue()}% ${calcType} ${Math.abs(offsetX)}px)`
            }
        },

        'x-on:keydown'(e) {
            if (['ArrowUp', 'ArrowRight'].includes(e.key)) {
                this.__nextValue();
            } else if(['ArrowDown', 'ArrowLeft'].includes(e.key)) {
                this.__prevValue();
            }
        },
    });
}

function handleRange(el, Alpine) {
    Alpine.bind(el, {
        'x-bind:style'() {
            let buildCalcString = (thumbEl) => {
                const $thumbData = Alpine.$data(thumbEl);
                const percent = $thumbData.__percentByValue();
                const offsetX = $thumbData.__currentOffsetX();
                const calcType = offsetX >= 0 ? '-' : '+';

                return `${percent}% ${calcType} ${Math.abs(offsetX)}px`;
            };

            let minCalc = '0px';
            let maxCalc = '0px';
            let thumbCount = this.__thumbs.length;

            if(thumbCount === 1) {
                maxCalc = buildCalcString(this.__thumbs[0]);
            } else if(thumbCount > 1) {
                minCalc = buildCalcString(this.__thumbs[0]);
                maxCalc = buildCalcString(this.__thumbs[thumbCount - 1]);
            }
            return {
                marginLeft: `calc(${minCalc})`,
                width: `calc((${maxCalc}) - (${minCalc}))`,
            }
        },
    });
}