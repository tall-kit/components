export default function (Alpine) {
    Alpine.directive('time', (el, directive) => {
        if (!directive.value) handleTime(el, Alpine)
        else if (directive.value === 'hours') handleHours(el, Alpine)
        else if (directive.value === 'minutes') handleMinutes(el, Alpine)
    }).before('bind');

    Alpine.magic('time', el => {
       const $data = Alpine.$data(el);
       return {
           get isActive() {
               if($data.__hoursEl && Alpine.$data($data.__hoursEl).__isActive) return true;
               if($data.__minutesEl && Alpine.$data($data.__minutesEl).__isActive) return true;
               return false;
           },
           set hours(value) {
               $data.__hours = value;
           },
           set minutes(value) {
               $data.__minutes = value;
           },
           set value(value) {
               $data.__value = value;
           },
           get hours() {
               return $data.__hours;
           },
           get minutes() {
               return $data.__minutes;
           },
       }
    });

    Alpine.magic('hours', el => {
        const $data = Alpine.$data(el);
        const value = $data.__value ?? null;
        return {
            get value() {
                return value;
            },
            get formatted() {
                return value;
            },
            get isEmpty() {
                return $data.__value === null;
            }
        };
    });

    Alpine.magic('minutes', el => {
        const $data = Alpine.$data(el);
        const value = $data.__value ?? null;
        return {
            get value() {
                return value;
            },
            get formatted() {
                return value.toString().padStart(2, '0');
            },
            get isEmpty() {
                return value === null;
            }
        };
    });
}

function handleTime(el, Alpine) {
    Alpine.bind(el, {
        'role': 'group',
        'x-modelable': '__timeValue',
        'x-data'() {
            return {
                init() {
                   queueMicrotask(() => {
                       this.__by = Alpine.bound(el, 'by', null);
                   });
                   this.$nextTick(() => {
                       this.__value = this.__timeValue;
                   })
                },
                __by: null,
                __hoursEl: null,
                __minutesEl: null,
                __timeValue: null,
                __hoursValue: null,
                __minutesValue: null,
                __updateTimeValue() {
                    if(this.__hoursEl && this.__hoursValue === null) {
                        this.__timeValue = null;
                        return;
                    }
                    if(this.__minutesEl && this.__minutesValue === null) {
                        this.__timeValue = null;
                        return;
                    }

                    switch (this.__by) {
                        case 'total-minutes':
                            this.__timeValue = this.__totalMinutes;
                            break;
                        default:
                            this.__timeValue = [
                                this.__hoursValue,
                                this.__minutesValue.toString().padStart(2, '0'),
                            ].join(':');
                    }
                },
                set __hours(value) {
                    value = parseInt(value);
                    if(isNaN(value)) value = null;
                    this.__hoursValue = value;
                    this.$nextTick(() => {
                        if(this.__hoursEl) {
                            Alpine.$data(this.__hoursEl).__handleValue(value);
                        }
                    });
                },
                set __minutes(value) {
                    value = parseInt(value);
                    if(isNaN(value)) value = null;
                    this.__minutesValue = value;
                    this.$nextTick(() => {
                        if(this.__minutesEl) {
                            Alpine.$data(this.__minutesEl).__handleValue(value);
                        }
                    });
                },
                set __totalMinutes(value) {
                    const minutes = (value % 60)
                    this.__minutes = minutes;
                    this.__hours = (value - minutes) / 60;
                },
                set __totalHours(value) {
                    this.__totalMinutes = parseFloat(value) * 60
                },
                set __value(value) {
                    if(value === null) return;

                    switch (this.__by) {
                        case 'total-minutes':
                            this.__totalMinutes = value;
                            break;
                        default:
                            const time = value.split(':');
                            this.__hours = time[0] ?? null;
                            this.__minutes = time[1] ?? null;
                    }
                },
                get __hours() {
                    if(this.__hoursEl) {
                        return Alpine.$data(this.__hoursEl).__value ?? 0;
                    }
                    return 0;
                },
                get __minutes() {
                    if(this.__minutesEl) {
                        return Alpine.$data(this.__minutesEl).__value ?? 0;
                    }
                    return 0;
                },
                get __totalMinutes() {
                    return this.__hours * 60 + this.__minutes;
                }
            }
        },
    })
}

function handleHours(el, Alpine) {
    Alpine.bind(el, {
       'x-spinbutton'() {
           //
       },
       'x-init'() {
           this.$data.__hoursEl = el;
       },
       'x-on:change'() {
           if(this.$data.__hoursValue === this.__value) return;

           this.$data.__hoursValue = this.__value;
           this.$data.__updateTimeValue();
           // TODO check after v3 release
           // send update to wire:model
           this.$dispatch('input', this.__timeValue ?? '');
       },
    })
}

function handleMinutes(el, Alpine) {
    Alpine.bind(el, {
       'x-spinbutton'() {
           //
       },
       'x-init'() {
           this.$data.__minutesEl = el;
       },
       'x-on:change'() {
           if(this.$data.__minutesValue === this.__value) return;

           this.$data.__minutesValue = this.__value;
           this.$data.__updateTimeValue();
           // TODO check after v3 release
           // send update to wire:model
           this.$dispatch('input', this.__timeValue ?? '');
       }
    })
}