@aware([
    'color' => 'primary',
    'variant' => 'outline',
    'size' => 'md'
])
@props([
    'tooltipTrigger' => false,
    'tooltipOptions' => ['hover' => false, 'focus' => false]
])
<div x-slider:thumb
     {{$attributes
        ->when($tooltipTrigger, fn() => $attributes->merge(['x-tooltip:trigger' => json_encode($tooltipOptions)]))
        ->class([
            'absolute top-0 z-10 left-0 bg-white shadow-md border-2 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 transition outline-none',
            "component-{$variant}-{$color} bg-[--background] border-[color:--thumb-border]",
            'focus:outline-[color:--outline] focus:outline-[length:--outline-width] outline-offset-[--outline-offset]',
            match($size) {
                'sm' => 'size-4',
                default => 'size-6',
                'lg' => 'size-7',
                'xl' => 'size-8',
            }
        ])}}
>{{$slot}}</div>
