@props([
    'size' => 'md',
    'color' => 'primary'
])
@php
    $activeColor = match ($color) {
        'primary' => 'bg-primary',
        'secondary' => 'bg-secondary',
        'neutral' => 'bg-neutral',
        'success' => 'bg-success',
        'warning' => 'bg-warning',
        'error' => 'bg-error',
    }
@endphp
<button x-toggle
        x-bind:class="{
            'bg-slate-200': !$toggle.isChecked,
            @js($activeColor): $toggle.isChecked,
            'opacity-50': $toggle.isDisabled
        }"
        x-bind:class="$toggle.isChecked ? @js($activeColor) : 'bg-slate-300'"
        @if($attributes->wire('model')->value)
            x-data="{
                value: @entangle($attributes->wire('model'))
            }"
            x-model="value"
        @endif
        {{$attributes->whereDoesntStartWith('wire:model')->class([
            'relative inline-flex flex-shrink-0 rounded-full transition border-transparent focus:outline-none focus:ring-offset-0 focus:ring-4',
            match ($color) {
                'primary' => 'focus:ring-primary-light',
                'secondary' => 'focus:ring-secondary-light',
                'neutral' => 'focus:ring-neutral-light',
                'success' => 'focus:ring-success-light',
                'warning' => 'focus:ring-warning-light',
                'error' => 'focus:ring-error-light',
            },
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
