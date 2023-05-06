import plugins from '../resources/js/plugins/index.js'

document.addEventListener('alpine:init', () => {
    window.Alpine.plugin(plugins)
})