@props([
    'offset' => 2,
    'placement' => 'bottom-start',
    'arrow' => false,
    'flip' => true,
    'shift' => true,
    'overlay' => false,
    'color' => 'neutral'
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
             @class([
                'z-20 absolute left-0 top-0 py-1 shadow-lg rounded-md border w-56 focus:outline-none',
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
            <div x-menu {{$menu->attributes->class('relative')}}>
                {{$menu}}
            </div>
        </div>
    </template>
</div>