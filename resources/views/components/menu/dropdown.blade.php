@props([
    'offset' => 2,
    'placement' => 'bottom-start',
    'arrow' => false,
    'flip' => true,
    'shift' => true,
    'overlay' => false,
    'color' => 'neutral',
    'variant' => 'soft'
])
<div x-menu:dropdown="{
        offset: {{$offset}},
        placement: @js($placement),
        flip: @js($flip),
        shift: @js($shift),
     }"
    {{$attributes}}>
    {{$slot}}
    @if($overlay)
        <x-overlay x-show="$dropdownMenu.isShown"/>
    @endif
    <template x-teleport="body">
        <div x-cloak
             x-transition.opacity
             x-menu:content
            class="component-outline-neutral bg-[var(--background)] text-[color:var(--foreground)] border-[var(--floating-border)] z-20 absolute outline-none left-0 top-0 py-1 shadow-lg rounded-md border w-56"
        >
            @if($arrow)
                <x-floating-arrow/>
            @endif
            <div x-menu {{$menu->attributes->class('relative')}}>
                {{$menu}}
            </div>
        </div>
    </template>
</div>