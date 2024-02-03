@props([
    'min' => 0,
    'max' => 100,
    'step' => 1,
    'color' => 'primary',
    'variant' => 'outline',
    'size' => 'md'
])
<div wire:ignore x-slider min="{{$min}}" max="{{$max}}" step="{{$step}}"
     {{$attributes->class("component-fill-{$color} cursor-pointer touch-none relative flex items-center rounded-lg w-full h-4")}}>
        <div class="bg-neutral-lightest shadow-inner w-full touch-none rounded-lg overflow-hidden">
            <div x-slider:range
                 @class([
                    'bg-[--background]',
                    match($size) {
                        'sm' => 'h-1',
                        default => 'h-2',
                        'lg' => 'h-3',
                        'xl' => 'h-4',
                    }
                 ])></div>
        </div>
    {{$slot}}
</div>