export default function (Alpine) {

    Alpine.directive('toggle', (el, {value}) => {
        if (!value) handleRoot(el, Alpine)
        else if (value === 'group') handleGroup(el, Alpine)
        else if (value === 'label') handleLabel(el, Alpine)
        else if (value === 'description') handleDescription(el, Alpine)
    }).before('bind')

    Alpine.magic('toggle', el => {
        let $data = Alpine.$data(el)

        return {
            get isChecked() {
                return $data.__checked
            },
            get isDisabled() {
                return $data.__disabled
            },
            toggle() {
                $data.__toggle()
            },
            enable() {
                $data.__disabled = false;
            },
            disable() {
                $data.__disabled = true;
            },
        }
    })
}

function handleGroup(el, Alpine) {
    Alpine.bind(el, {
        'x-id'() {
            return ['toggle-trigger', 'toggle-label', 'toggle-description']
        },
        'x-data'() {
            return {
                __labelEL: null,
                __descriptionEL: null,
            }
        }
    })
}

function handleRoot(el, Alpine) {
    Alpine.bind(el, {
        'role': 'switch',
        'tabindex': '0',

        'x-modelable': '__checked',
        'x-data'() {
            return {
                init() {
                    queueMicrotask(() => {
                        this.__checked = Alpine.bound(this.$el, 'checked', false)
                    })
                },
                __checked: false,
                __disabled: false,
                __toggle() {
                    this.__checked = !this.__checked;
                },
            }
        },

        'x-bind:id'() {
            return this.$id('toggle-trigger')
        },
        'x-bind:disabled'() {
            return this.__disabled
        },
        'x-bind:aria-checked'() {
            return this.__checked
        },
        'x-bind:aria-labelledby'() {
            return this.__labelEl && this.$id('toggle-label')
        },
        'x-bind:aria-describedby'() {
            return this.__descriptionEl && this.$id('toggle-description')
        },

        'x-on:click.prevent'() {
            this.__toggle()
        },
    })
}

function handleLabel(el, Alpine) {
    Alpine.bind(el, {
        'x-init'() {
            this.__labelEl = el;
        },
        'x-bind:id'() {
            return this.$id('toggle-label')
        },
        'x-bind:for'() {
            return this.$id('toggle-trigger')
        },
    })
}

function handleDescription(el, Alpine) {
    Alpine.bind(el, {
        'x-init'() {
            this.__descriptionEl = el;
        },
        'x-bind:id'() {
            return this.$id('toggle-description')
        },
    })
}
