@aware(['color' => 'neutral'])
@props(['orientation' => 'horizontal'])
<div aria-hidden="true" {{$attributes->class([
        'my-2 flex-shrink-0 bg-border',
        'h-px w-full' => $orientation === 'horizontal',
        'w-px h-full' => $orientation === 'vertical',
        match ($color) {
           'primary' => 'bg-primary',
           'secondary' => 'bg-secondary-dark',
           'success' => 'bg-success-light',
           'warning' => 'bg-warning-light',
           'error' => 'bg-error-light',
           default => 'bg-neutral-light',
        },
])}}></div>