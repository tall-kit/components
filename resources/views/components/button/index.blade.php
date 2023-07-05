@props([
    'variant' => 'fill',
    'color' => 'primary',
    'size' => 'md',
    'href' => null
])
@php
    $defaults = $href ? ['href' => $href] : ['type' => 'button'];
    $defaults['x-data'] = false;
    $tag = $href ? 'a' : 'button';
@endphp
<{{$tag}} {{$attributes
            ->merge($defaults)
            ->class([
                'group inline-flex items-center justify-center border font-medium transition outline-none disabled:opacity-75',
                "component-{$variant}-{$color} size-{$size} rounded-[var(--btn-rounded)] bg-[var(--background)] p-[var(--padding)] border-[var(--border)] leading-[var(--leading)] text-[color:var(--foreground)] text-[length:var(--font-size)] outline-offset-[var(--outline-offset)]",
                'focus-visible:border-[var(--border-focus)] focus-visible:outline-[color:var(--outline)] focus-visible:outline-[length:var(--outline-width)]',
                'hover:bg-[var(--background-hover)]',
                match ($variant) {
                    'fill', 'outline' => 'shadow-sm',
                    'link' => 'hover:underline',
                    default => null
                }
            ])}}>
{{$slot}}
</{{$tag}}>