@aware(['id', 'error'])
@props(['size' => 'md'])
<input
    @isset($id) id="{{$id}}" @endisset
    {{$attributes->merge(['type' => 'text'])->class([
        'component-outline-neutral shadow-sm block w-full border transition outline-none',
        'bg-[var(--background)] rounded-[var(--rounded)] border-[var(--border)]',
        "size-{$size} p-[var(--padding)] leading-[var(--leading)] text-[color:var(--foreground)] text-[length:var(--font-size)]",
        'focus:ring-transparent focus:border-[var(--input-border-focus)] focus:outline-[color:var(--outline)] focus:outline-[length:var(--outline-width)] focus:outline-offset-[var(--outline-offset)]',
    ])}}
>
