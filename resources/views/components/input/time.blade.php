@aware(['id', 'error'])
@props([
    'size' => 'md',
    'color' => 'neutral',
    'variant' => 'soft',
    'leadingIcon' => null,
    'trailingIcon' => null,
])
@php
        [$iconSize, $leadingIconPadding, $trailingIconPadding] = match ($size) {
            'sm' => ['size-4', 'pl-7', 'pr-7'],
            'lg' => ['size-6', 'pl-10', 'pr-10'],
            'xl' => ['size-8', 'pl-12', 'pr-12'],
            default => ['size-5', 'pl-9', 'pr-9'],
        }
@endphp
<div
        @isset($id) id="{{$id}}" @endisset
        x-time
        {{$attributes->class([
            'relative h-fit component-outline-neutral shadow-sm block inline-flex border transition outline-none',
            'bg-[--background] rounded-[--rounded] border-[--border]',
            "size-{$size} p-[--padding] leading-[--leading] text-[color:--foreground] text-[length:--font-size]",
            $leadingIconPadding => $leadingIcon,
            $trailingIconPadding => $trailingIcon,
        ])}}
        x-bind:class="{
           'border-[--input-border-focus] outline-[color:--outline] outline-[length:--outline-width] outline-offset-[--outline-offset] z-10' : $time.isActive
        }"
>
        @if($leadingIcon)
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                        <x-icon :name="$leadingIcon" aria-hidden="true"
                                class="text-[--input-placeholder] {{$iconSize}}"/>
                </div>
        @endif
        <div x-time:hours
             class="component-{{$variant}}-{{$color}} caret-transparent rounded-md outline-none focus:bg-[--background] focus:text-[color:--foreground] -my-0.5 -ml-1.5 px-1 py-0.5"
             min="0"
             max="23"
             x-text="$hours.isEmpty ? '––' : $hours.formatted"></div>
        <div aria-hidden="true" class="text-neutral">:</div>
        <div x-time:minutes
             class="component-{{$variant}}-{{$color}} caret-transparent rounded-md outline-none focus:bg-[--background] focus:text-[color:--foreground] -my-0.5 -mr-1.5 px-1 py-0.5"
             min="0"
             max="59"
             x-text="$minutes.isEmpty ? '––' : $minutes.formatted"></div>
        @if($trailingIcon)
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <x-icon :name="$trailingIcon" aria-hidden="true"
                                class="text-[--input-placeholder] {{$iconSize}}"/>
                </div>
        @endif
</div>