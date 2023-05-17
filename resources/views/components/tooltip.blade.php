@props([
    'delay' => 0,
    'offset' => 12,
    'placement' => 'top',
    'arrow' => true,
    'flip' => true,
    'shift' => true,
    'overlay' => false,
    'interactive' => false,
    'variant' => 'light'
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
            @class([
               'z-20 absolute left-0 top-0 px-2 py-1 shadow-lg rounded-md border',
               match ($variant) {
                   'primary' => 'bg-primary-dark text-white border-primary',
                   'secondary' => 'bg-secondary-darker text-secondary-lighter border-secondary-dark',
                   'destructive' => 'bg-destructive-lighter text-destructive-darker border-destructive-light',
                   default => 'bg-white border-slate-300',
               }
           ])
    >
        <div {{$content->attributes}}>
            {{$content}}
        </div>

        @if($arrow)
            <x-floating-arrow/>
        @endif
    </div>
</div>