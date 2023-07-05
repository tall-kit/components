@props([
    'size' => 'md',
    'color' => 'primary',
])
<button x-toggle
        x-bind:class="{
            'bg-neutral-light': !$toggle.isChecked,
            'bg-[var(--background)]': $toggle.isChecked,
            'opacity-50': $toggle.isDisabled
        }"
        {{$attributes->whereDoesntStartWith('wire:model')->class([
            'relative inline-flex flex-shrink-0 rounded-full transition border-transparent outline-none',
            "component-fill-{$color} focus:outline-[color:var(--outline)] focus:outline-[length:var(--outline-width)] outline-offset-[var(--outline-offset)] ",
            match ($size) {
                'sm' => 'h-5 w-9 border-2',
                'md' => 'h-6 w-11 border-2',
                'lg' => 'h-8 w-14 border-4',
            }
        ])}}
>
    <span
            aria-hidden="true"
            x-bind:class="$toggle.isChecked ? 'translate-x-full' : 'translate-x-0'"
            @class([
                'bg-white pointer-events-none rounded-full transition shadow-md',
                match ($size) {
                    'sm' => 'h-4 w-4',
                    'md' => 'h-5 w-5',
                    'lg' => 'h-6 w-6',
                }
            ])
    ></span>
</button>
