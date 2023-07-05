@props([
    'delay' => 0,
    'offset' => 12,
    'placement' => 'top',
    'arrow' => true,
    'flip' => true,
    'shift' => true,
    'overlay' => false,
    'interactive' => false,
    'color' => 'neutral',
    'variant' => 'outline'
])
<div x-tooltip="{
        delay: {{$delay}},
        offset: {{$offset}},
        placement: @js($placement),
        flip: @js($flip),
        interactive: @js($interactive),
        shift: @js($shift)
     }"
     {{$attributes}}
>
    {{$slot}}
    @if($overlay)
        <x-overlay x-show="$popover.isShown"/>
    @endif
    <div x-cloak
         x-transition.opacity
         x-tooltip:content
         class="component-{{$variant}}-{{$color}} bg-[var(--background)] text-[color:var(--foreground)] border-[var(--floating-border)] z-20 absolute left-0 top-0 px-2 py-1 shadow-lg rounded-md border"
    >
        @if($arrow)
            <x-floating-arrow/>
        @endif
        <div {{$content->attributes->class('relative')}}>
            {{$content}}
        </div>
    </div>
</div>