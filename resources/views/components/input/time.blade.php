@aware(['id', 'error'])
@props(['size' => 'md', 'color' => 'neutral', 'variant' => 'soft'])
<div
        @isset($id) id="{{$id}}" @endisset
        x-time
        {{$attributes->class([
            'component-outline-neutral shadow-sm block inline-flex border transition outline-none',
            'bg-[var(--background)] rounded-[var(--rounded)] border-[var(--border)]',
            "size-{$size} p-[var(--padding)] leading-[var(--leading)] text-[color:var(--foreground)] text-[length:var(--font-size)]",
        ])}}
        x-bind:class="{
           'border-[var(--input-border-focus)] outline-[color:var(--outline)] outline-[length:var(--outline-width)] outline-offset-[var(--outline-offset)] z-10' : $time.isActive
        }"
>
        <div x-time:hours
             class="component-{{$variant}}-{{$color}} caret-transparent rounded-md outline-none focus:bg-[var(--background)] focus:text-[color:var(--foreground)] -my-0.5 -ml-1.5 px-1 py-0.5"
             min="0"
             max="23"
             x-text="$hours.isEmpty ? '––' : $hours.formatted"></div>
        <div aria-hidden="true" class="text-neutral">:</div>
        <div x-time:minutes
             class="component-{{$variant}}-{{$color}} caret-transparent rounded-md outline-none focus:bg-[var(--background)] focus:text-[color:var(--foreground)] -my-0.5 -mr-1.5 px-1 py-0.5"
             min="0"
             max="59"
             x-text="$minutes.isEmpty ? '––' : $minutes.formatted"></div>

</div>