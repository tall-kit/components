@aware(['id', 'error'])
@props(['options', 'button', 'size' => 'md', 'multiple' => false])
<div x-listbox:dropdown
    {{$attributes
        ->whereDoesntStartWith(['x-model', 'wire:model'])
        ->class('relative w-full')}}
>
    <button type="button"
            x-listbox:trigger
            @class([
                'bg-white shadow-sm block w-full rounded-md border transition outline-none text-left truncate pr-9 min-h-[2rem]',
                'border-slate-300 focus:border-primary focus:ring focus:ring-primary-light' => $error === null || !$errors->has($error),
                'border-destructive-light text-destructive-darker placeholder-destructive-light focus:outline-none focus:ring-destructive focus:border-destructive' => $error && $errors->has($error),
                match ($size) {
                    'sm' => 'pl-2 py-1 text-xs',
                    'md' => 'pl-3 py-1.5 text-sm',
                    'lg' => 'pl-4 py-2 text-base',
                    'xl' => 'pl-5 py-3 text-xl',
                }
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
        class="z-20 absolute left-0 top-0 shadow-lg rounded-md overflow-hidden border w-full p-0 outline-none outline-none bg-white text-neutral-darker border-neutral-light"
        {{$attributes->whereStartsWith(['x-model'])}}
        @if($attributes->wire('model')->value)
            x-data="{
                value: @entangle($attributes->wire('model'))
            }"
            x-model="value"
        @endif
    >
        <div x-listbox:options class="overflow-auto my-1 max-h-56">
            {{$options}}
        </div>
    </div>
</div>