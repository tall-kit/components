@props([
    'offset' => 12,
    'placement' => 'top',
    'arrow' => true,
    'flip' => true,
    'shift' => true,
    'trap' => true,
    'overlay' => false,
    'color' => 'neutral',
    'variant' => 'outline'
])
<div x-popover="{
        offset: {{$offset}},
        placement: @js($placement),
        flip: @js($flip),
        shift: @js($shift),
     }"
    {{$attributes}}
>
    {{$slot}}
    @if($overlay)
        <x-overlay x-show="$popover.isShown"/>
    @endif
    <div x-cloak
         x-transition.opacity
         x-popover:content
         class="component-{{$variant}}-{{$color}} bg-[var(--background)] text-[color:var(--foreground)] border-[var(--floating-border)] z-20 absolute outline-none left-0 top-0 px-2 py-1 shadow-lg rounded-md border"
    >
        @if($arrow)
            <x-floating-arrow/>
        @endif
        <div {{$content->attributes->class('relative')}} @if($trap) x-trap.noreturn="$popover.isShown" @endif>
            {{$content}}
        </div>
    </div>
</div>