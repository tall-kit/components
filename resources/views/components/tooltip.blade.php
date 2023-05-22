@props([
    'delay' => 0,
    'offset' => 12,
    'placement' => 'top',
    'arrow' => true,
    'flip' => true,
    'shift' => true,
    'overlay' => false,
    'interactive' => false,
    'color' => 'neutral'
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
               match ($color) {
                    'primary' => 'bg-primary-dark text-white border-primary',
                    'secondary' => 'bg-secondary-darker text-secondary-lighter border-secondary-dark',
                    'success' => 'bg-success-lighter text-success-dark border-success-light',
                    'warning' => 'bg-warning-lighter text-warning-dark border-warning-light',
                    'error' => 'bg-error-lighter text-error-dark border-error-light',
                    default => 'bg-white text-neutral-darker border-neutral-light',
               },
           ])
    >
        @if($arrow)
            <x-floating-arrow/>
        @endif
        <div {{$content->attributes->class('relative')}}>
            {{$content}}
        </div>
    </div>
</div>