@props(['min' => 0, 'max' => 100, 'step' => 1])
<div wire:ignore x-slider min="{{$min}}" max="{{$max}}" step="{{$step}}"
     {{$attributes->class('cursor-pointer touch-none relative w-full h-3 bg-slate-100 rounded-lg shadow-inner')}}>
    <div class="absolute w-full touch-none rounded-lg overflow-hidden">
        <div x-slider:range class="h-3 bg-primary"></div>
    </div>
    {{$slot}}
</div>