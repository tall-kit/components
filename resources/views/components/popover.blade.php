@props([
    'offset' => 12,
    'placement' => 'top',
    'arrow' => true,
    'flip' => true,
    'shift' => true,
    'trap' => true,
    'overlay' => false,
    'color' => 'neutral'
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
         @class([
             'z-20 absolute left-0 top-0 px-2 py-1 shadow-lg rounded-md border focus:outline-none',
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
        <div {{$content->attributes->class('relative')}} @if($trap) x-trap.noreturn="$popover.isShown" @endif>
            {{$content}}
        </div>
    </div>
</div>