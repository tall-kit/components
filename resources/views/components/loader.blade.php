@props([
    'size' => 'md',
])
<svg fill="none"
     viewBox="0 0 24 24"
     {{$attributes->class([
        'animate-spin',
        match ($size) {
            'xs' => 'h-3 w-3',
            'md' => 'h-4 w-4',
            'lg' => 'h-6 w-6',
            'xl' => 'h-8 w-8',
        },
    ])}}
>
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
</svg>