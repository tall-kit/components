export default function (Alpine) {
    /**
     * x-field
     */
    Alpine.directive('field', (el, { value }) => {
        if(!value) handleField(el, Alpine);
    }).before('bind')

    /**
     * x-label
     */
    Alpine.directive('label', (el, { value }) => {
        if(!value) handleLabel(el, Alpine);
    }).before('bind')

    /**
     * x-input
     */
    Alpine.directive('input', (el, { value }) => {
        if(!value) handleInput(el, Alpine);
    }).before('bind')

    /**
     * x-switch
     */
    Alpine.directive('switch', (el, { value }) => {
        if(!value) handleSwitch(el, Alpine);
    }).before('bind')

    /**
     * x-error
     */
    Alpine.directive('error', Alpine.skipDuringClone((el, { value }, { cleanup }) => {
        if(!value) handleError(el, Alpine, cleanup);
    })).before('bind')

    /**
     * x-description
     */
    Alpine.directive('description', Alpine.skipDuringClone((el, { value }, { cleanup }) => {
        if(!value) handleDescription(el, Alpine, cleanup);
    })).before('bind')

    /**
     *  $switch
     */
    Alpine.magic('switch', el => {
        let $data = Alpine.$data(el)

        return {
            get isChecked() {
                return $data._checked;
            },
            get isDisabled() {
                return $data._disabled
            },
            toggle() {
                $data._toggle()
            },
            enable() {
                $data._disabled = false;
            },
            disable() {
                $data._disabled = true;
            },
        }
    })
}

function handleField(el, Alpine) {
    Alpine.bind(el, {
        'x-id'() {
            return ['field-label', 'field-input', 'field-description', 'field-error']
        },
        'x-data'() {
            return {
                _labelEl: null,
                _descriptionEl: null,
                _errorEl: null,
            }
        },
    })
}

function handleLabel(el, Alpine) {
    const fieldEl = el.closest('[x-field]');
    if(!fieldEl) return;

    Alpine.bind(el, {
        'x-bind:id'() {
            return this.$id('field-label');
        },
        'x-bind:for'() {
            return this.$id('field-input');
        }
    })
}

function handleInput(el, Alpine) {
    Alpine.bind(el, {
        'x-data'() {
            return {
                _invalid: false,
                init() {
                    this._invalid = Alpine.bound(el, 'invalid', 'false') === 'true'
                },
            }
        },
        'x-bind:id'() {
            return this.$id('field-input');
        },
        'x-bind:aria-invalid'() {
            this._invalid = Alpine.bound(el, 'invalid', 'false') === 'true';
            if(this._invalid) return true
        },
        'x-bind:describedby'() {
            const ids = [];
            if(this.$data._descriptionEl) ids.push(this.$data._descriptionEl.id);
            if(this._invalid && this.$data._errorEl) ids.push(this.$data._errorEl.id);
            if(ids.length) return ids.join(' ');
        },
    })
}

function handleSwitch(el, Alpine) {

    Alpine.bind(el, {
        'role': 'switch',
        'tabindex': '0',
        'x-modelable': '_checked',
        'x-data'() {
            return {
                init() {
                    queueMicrotask(() => {
                        this._checked = Alpine.bound(el, 'checked', false)
                    })
                },
                _checked: false,
                _disabled: false,
                _toggle() {
                    this._checked = !this._checked;
                },
            }
        },
        'x-bind:id'() {
            return this.$id('field-input')
        },
        'x-bind:disabled'() {
            return this._disabled
        },
        'x-bind:aria-checked'() {
            return this._checked
        },
        'x-bind:aria-labelledby'() {
            return this._labelEl && this.$id('input-label')
        },
        'x-bind:aria-describedby'() {
            return this._descriptionEl && this.$id('field-description')
        },

        'x-on:click.prevent'() {
            this._toggle()
        },
    })
}

function handleError(el, Alpine, cleanup) {
    Alpine.bind(el, {
        'x-data'() {
            return {
                init() {
                    this.$data._errorEl = el;
                    el.id = this.$id('field-error');
                    cleanup(() => {
                        this.$data._errorEl = null;
                    });
                },
            }
        },
    })
}

function handleDescription(el, Alpine, cleanup) {
    Alpine.bind(el, {
        'x-data'() {
            return {
                init() {
                    this.$data._descriptionEl = el;
                    el.id = this.$id('field-description');
                    cleanup(() => {
                        this.$data._descriptionEl = null;
                    });
                },
            }
        },
    })
}