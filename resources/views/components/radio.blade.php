@aware(['id', 'error'])
<input x-input
    type="radio"
    @isset($id) id="{{$id}}" @endisset
    {{$attributes->class([
        'component-outline-neutral shadow-sm h-4 w-4 border transition outline-none',
        'text-[color:var(--radio-foreground)] border-[var(--border)]',
        'focus:ring-transparent focus:border-[var(--input-border-focus)] focus:outline-[color:var(--outline)] focus:outline-[length:var(--outline-width)] focus:outline-offset-[var(--outline-offset)]',
    ])}}
>
