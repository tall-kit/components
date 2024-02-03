@props([
    'variant' => 'fill',
    'color' => 'primary',
    'size' => 'md',
    'href' => null,
    'icon' => null,
    'leadingIcon' => null,
    'trailingIcon' => null,
])
@php
    $defaults = $href ? ['href' => $href] : ['type' => 'button'];
    $defaults['x-data'] = false;
    $tag = $href ? 'a' : 'button';
    $iconSize = match ($size) {
        'sm' => 'size-4',
        'lg' => 'size-6',
        'xl' => 'size-8',
        default => 'size-5',
    };
    $leadingIcon ??= $icon;
@endphp
<{{$tag}} {{$attributes
            ->merge($defaults)
            ->class([
                'group inline-flex cursor-default items-center justify-center border font-medium transition outline-none disabled:opacity-75 gap-1.5',
                "component-{$variant}-{$color} size-{$size} rounded-[--btn-rounded] bg-[--background] p-[--padding] border-[--border] leading-[--leading] text-[color:--foreground] text-[length:--font-size] outline-offset-[--outline-offset]",
                'focus-visible:border-[--border-focus] focus-visible:outline-[color:--outline] focus-visible:outline-[length:--outline-width]',
                'hover:bg-[--background-hover]',
                match ($variant) {
                    'fill', 'outline' => 'shadow-sm',
                    'link' => 'cursor-pointer hover:underline',
                    default => null
                }
            ])}}>
@if($leadingIcon)
    <x-icon :name="$leadingIcon" aria-hidden="true" class="{{$iconSize}} {{$slot->isEmpty() ? '-mx-1' : '-ml-1'}}"/>
@endif
{{$slot}}
@if($trailingIcon)
    <x-icon :name="$trailingIcon" aria-hidden="true" class="{{$iconSize}} {{$slot->isEmpty() ? '-mx-1' : '-mr-1'}}"/>
@endif
</{{$tag}}>