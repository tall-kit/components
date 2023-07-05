@aware(['color' => 'neutral', 'variant' => 'soft'])
<div x-menu:submenu
     x-bind:class="{
        'cursor-pointer bg-[var(--background)] text-[color:var(--foreground)] border-[var(--border)]': $menuitem.isActive,
        'text-gray-400': $menuitem.isDisabled,
        'text-gray-700': !$menuitem.isActive && !$menuitem.isDisabled
     }"
     {{$attributes->class([
        'select-none block mx-1 rounded-md p-2 text-sm flex items-center outline-none',
        "component-{$variant}-{$color}"
     ])}}
>
    <div class="flex-grow flex items-center">{{$slot}}</div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="shrink-0 w-4 h-4">
        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
    </svg>
    <template x-teleport="body">
        <div x-menu:content
             x-transition:enter.opacity
             class="component-outline-neutral bg-[var(--background)] text-[color:var(--foreground)] border-[var(--floating-border)] z-20 absolute outline-none left-0 top-0 py-1 shadow-lg rounded-md border w-56"
        >
            <div x-menu>
                {{$menu}}
            </div>
        </div>
    </template>
</div>