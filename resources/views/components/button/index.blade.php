@props([
    'variant' => 'primary',
    'size' => 'md',
    'href' => null
])
@php
    $defaults = $href ? [
        'href' => $href
    ] : [
        'type' => 'button'
    ];
    $tag = $href ? 'a' : 'button';
@endphp
<{{$tag}} {{$attributes
            ->merge($defaults)
            ->class([
                'group inline-flex items-center justify-center border font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:z-10 disabled:opacity-75',
                match ($variant) {
                    'primary' => 'border-transparent text-white bg-primary-600 enabled:hover:bg-primary-700 focus:ring-offset-2',
                    'secondary' => 'border-transparent bg-primary-100 text-primary-700 enabled:hover:bg-primary-200',
                    'light' => 'border-gray-300 text-gray-700 bg-white enabled:hover:bg-gray-50',
                },
                match ($size) {
                    'xs' => 'px-2 py-1 text-xs',
                    'md' => 'px-3 py-1.5 text-sm',
                    'lg' => 'px-4 py-2 text-sm',
                    'xl' => 'px-6 py-3 text-base',
                },
            ])}}>
    {{$slot}}
</{{$tag}}>