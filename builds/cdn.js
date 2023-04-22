import components from '../resources/js/components/index.js'

document.addEventListener('alpine:init', () => {
    window.Alpine.plugin(components)
})