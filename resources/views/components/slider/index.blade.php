@props([
    'min' => 0,
    'max' => 100,
    'step' => 1,
    'color' => 'primary',
    'variant' => 'outline',
])
<div wire:ignore x-slider min="{{$min}}" max="{{$max}}" step="{{$step}}"
     {{$attributes->class("component-fill-{$color} cursor-pointer touch-none relative w-full h-3 bg-neutral-lightest rounded-lg shadow-inner")}}>
        <div class="absolute w-full touch-none rounded-lg overflow-hidden">
            <div x-slider:range class="h-3 bg-[var(--background)]"></div>
        </div>
    {{$slot}}
</div>