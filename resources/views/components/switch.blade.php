@props([
    'size' => 'md',
    'color' => 'primary',
])
<button x-switch
        x-bind:class="{
            'bg-neutral-light': !$switch.isChecked,
            'bg-[--background]': $switch.isChecked,
            'opacity-50': $switch.isDisabled
        }"
        {{$attributes->class([
            'relative inline-flex cursor-default flex-shrink-0 rounded-full transition border-transparent outline-none',
            "component-fill-$color focus:outline-[color:--outline] focus:outline-[length:--outline-width] outline-offset-[--outline-offset]",
            match ($size) {
                'sm' => 'h-5 w-9 border-2',
                'md' => 'h-6 w-11 border-2',
                'lg' => 'h-8 w-14 border-4',
            }
        ])}}
>
    <span
            aria-hidden="true"
            x-bind:class="$switch.isChecked ? 'translate-x-full' : 'translate-x-0'"
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
