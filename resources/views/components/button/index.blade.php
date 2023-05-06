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
                'group inline-flex items-center justify-center border font-medium rounded-md transition focus:outline-none focus:ring disabled:opacity-75',
                match ("$variant-$color") {
                    // Primary variants
                    'fill-primary' => 'shadow-sm border-transparent text-white bg-primary-dark enabled:hover:bg-primary-darker focus:ring-primary-light',
                    'outline-primary' => 'shadow-sm border-primary-light text-primary-dark bg-white enabled:hover:bg-primary-lighter focus:ring-primary-light',
                    'soft-primary' =>  'shadow-sm border-transparent bg-primary-lighter text-primary-dark enabled:hover:bg-primary-light focus:ring-primary-light',
                    'ghost-primary' => 'border-transparent text-primary-dark enabled:hover:bg-primary-lighter focus:ring-primary-light',
                    // Secondary variants
                    'fill-secondary' => 'shadow-sm border-transparent text-white bg-secondary-dark enabled:hover:bg-secondary-darker focus:ring-secondary-light',
                    'outline-secondary' => 'shadow-sm border-secondary-light text-secondary-dark bg-white enabled:hover:bg-secondary-lighter focus:ring-secondary-light',
                    'soft-secondary' =>  'shadow-sm border-transparent bg-secondary-lighter text-secondary-dark enabled:hover:bg-secondary-light focus:ring-secondary-light',
                    'ghost-secondary' => 'border-transparent text-secondary-dark enabled:hover:bg-secondary-lighter focus:ring-secondary-light',
                    // Neutral variants
                    'fill-neutral' => 'shadow-sm border-transparent text-white bg-neutral-dark enabled:hover:bg-neutral-darker focus:ring-neutral-light',
                    'outline-neutral' => 'shadow-sm border-neutral-light text-neutral-dark bg-white enabled:hover:bg-neutral-lighter focus:ring-neutral-light',
                    'soft-neutral' =>  'shadow-sm border-transparent bg-neutral-lighter text-neutral-dark enabled:hover:bg-neutral-light focus:ring-neutral-light',
                    'ghost-neutral' => 'border-transparent text-neutral-dark enabled:hover:bg-neutral-lighter focus:ring-neutral-light',
                    // Success variants
                    'fill-success' => 'shadow-sm border-transparent text-white bg-success-dark enabled:hover:bg-success-darker focus:ring-success-light',
                    'outline-success' => 'shadow-sm border-success-light text-success-dark bg-white enabled:hover:bg-success-lighter focus:ring-success-light',
                    'soft-success' =>  'shadow-sm border-transparent bg-success-lighter text-success-dark enabled:hover:bg-success-light focus:ring-success-light',
                    'ghost-success' => 'border-transparent text-success-dark enabled:hover:bg-success-lighter focus:ring-success-light',
                    // Warning variants
                    'fill-warning' => 'shadow-sm border-transparent text-white bg-warning-dark enabled:hover:bg-warning-darker focus:ring-warning-light',
                    'outline-warning' => 'shadow-sm border-warning-light text-warning-dark bg-white enabled:hover:bg-warning-lighter focus:ring-warning-light',
                    'soft-warning' =>  'shadow-sm border-transparent bg-warning-lighter text-warning-dark enabled:hover:bg-warning-light focus:ring-warning-light',
                    'ghost-warning' => 'border-transparent text-warning-dark enabled:hover:bg-warning-lighter focus:ring-warning-light',
                    // Error variants
                    'fill-error' => 'shadow-sm border-transparent text-white bg-error-dark enabled:hover:bg-error-darker focus:ring-error-light',
                    'outline-error' => 'shadow-sm border-error-light text-error-dark bg-white enabled:hover:bg-error-lighter focus:ring-error-light',
                    'soft-error' =>  'shadow-sm border-transparent bg-error-lighter text-error-dark enabled:hover:bg-error-light focus:ring-error-light',
                    'ghost-error' => 'border-transparent text-error-dark enabled:hover:bg-error-lighter focus:ring-error-light',
                },
                match ($size) {
                    'sm' => 'px-2 py-1 text-xs',
                    'md' => 'px-3 py-1.5 text-sm',
                    'lg' => 'px-4 py-2 text-sm',
                    'xl' => 'px-6 py-3 text-base',
                },
            ])}}>
    {{$slot}}
</{{$tag}}>