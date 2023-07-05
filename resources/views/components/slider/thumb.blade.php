@aware([
    'color' => 'primary',
    'variant' => 'outline',
])
<div x-slider:thumb
     {{$attributes->class([
        'absolute w-6 h-6 top-0 z-10 left-0 bg-white shadow-md border-2 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 transition outline-none',
        "component-{$variant}-{$color} bg-[var(--background)] border-[color:var(--thumb-border)]",
        'focus:outline-[color:var(--outline)] focus:outline-[length:var(--outline-width)] outline-offset-[var(--outline-offset)]'
     ])}}
></div>
