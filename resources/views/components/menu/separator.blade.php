@aware(['color' => 'neutral'])
<div x-menu:separator
     {{$attributes->class([
        'border-b my-1',
        match ($color) {
           'primary' => 'border-primary',
           'secondary' => 'border-secondary-dark',
           'success' => 'border-success-light',
           'warning' => 'border-warning-light',
           'error' => 'border-error-light',
           default => 'border-neutral-light',
        },
    ])}}
></div>