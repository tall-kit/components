@aware(['id', 'error'])
@props(['options', 'button', 'size' => 'md', 'color' => 'neutral', 'variant' => 'soft', 'multiple' => false])
<div x-listbox:dropdown
     wire:ignore
    {{$attributes
        ->whereDoesntStartWith(['x-model', 'wire:model'])
        ->class('relative w-full h-fit')}}
>
    <button type="button"
            x-listbox:trigger
            @class([
                'component-outline-neutral shadow-sm block w-full border transition outline-none text-left',
                'bg-[var(--background)] rounded-[var(--rounded)] border-[var(--border)]',
                "size-{$size} p-[var(--padding)] leading-[var(--leading)] text-[color:var(--foreground)] text-[length:var(--font-size)]",
                'focus:ring-transparent focus:border-[var(--input-border-focus)] focus:outline-[color:var(--outline)] focus:outline-[length:var(--outline-width)] focus:outline-offset-[var(--outline-offset)]',
            ])
    >
        {{$button}}
        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg class="h-5 w-5 text-neutral" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
            </svg>
       </span>
    </button>
    <div
        x-transition:enter.opacity
        x-listbox
        x-cloak
        @if($multiple) multiple-options @endif
        class="z-20 absolute left-0 top-0 shadow-lg rounded-md overflow-hidden border w-full p-0 outline-none bg-white text-neutral-darker border-neutral-light"
        {{$attributes->whereStartsWith(['x-model', 'wire:model'])}}
    >
        <div x-listbox:options class="overflow-auto my-1 max-h-56">
            {{$options}}
        </div>
    </div>
</div>