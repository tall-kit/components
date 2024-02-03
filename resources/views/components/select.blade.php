@aware(['disabled'])
@props([
    'size' => 'md',
    'hasError' => $errors->has($attributes->wire('model')->value()),
    'leadingIcon' => null,
    'trailingIcon' => 'heroicon-o-chevron-up-down',
    'disabled' => false,
])
@php
    [$iconSize, $leadingIconPadding, $trailingIconPadding] = match ($size) {
        'sm' => ['size-4', 'pl-7', 'pr-7'],
        'lg' => ['size-6', 'pl-10', 'pr-10'],
        'xl' => ['size-8', 'pl-12', 'pr-12'],
        default => ['size-5', 'pl-9', 'pr-9'],
    }
@endphp
<div class="relative">
    @if($leadingIcon)
        <span class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <x-icon :name="$leadingIcon" aria-hidden="true"
                    class="text-[--input-placeholder] {{$iconSize}}"/>
        </span>
    @endif
    <select x-input
            invalid="@js($hasError)"
            @disabled($disabled)
            {{$attributes->class([
                'component-outline-neutral' => !$hasError,
                'component-outline-error' => $hasError,
                'shadow-sm block w-full border transition outline-none bg-none',
                'bg-[--background] rounded-[--rounded] border-[--border] placeholder:text-[color:--input-placeholder]',
                "size-{$size} p-[--padding] leading-[--leading] text-[color:--foreground] text-[length:--font-size]",
                'focus:ring-transparent focus:border-[--input-border-focus] focus:outline-[color:--outline] focus:outline-[length:--outline-width] focus:outline-offset-[--outline-offset]',
                $leadingIconPadding => $leadingIcon,
                $trailingIconPadding => $trailingIcon,
            ])}}
    >
        {{$slot}}
    </select>
    @if($trailingIcon)
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <x-icon :name="$trailingIcon" aria-hidden="true"
                    class="text-[--input-placeholder] {{$iconSize}}"/>
        </span>
    @endif
</div>