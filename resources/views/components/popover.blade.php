@props([
    'offset' => 12,
    'placement' => 'top',
    'arrow' => true,
    'flip' => true,
    'shift' => true,
    'trap' => true,
    'overlay' => false,
    'variant' => 'light'
])
<div x-popover="{
        offset: {{$offset}},
        placement: @js($placement),
        flip: @js($flip),
        shift: @js($shift),
     }"
    {{$attributes}}
>
    {{$slot}}
    @if($overlay)
        <x-overlay x-show="$popover.isShown"/>
    @endif
    <div x-cloak
         x-transition
         x-popover:content
         @class([
             'z-20 absolute left-0 top-0 p-2 shadow-lg rounded-md border focus:outline-none',
             match ($variant) {
                 'primary' => 'bg-primary-dark text-white border-primary',
                 'secondary' => 'bg-secondary-darker text-secondary-lighter border-secondary-dark',
                 'destructive' => 'bg-destructive-lighter text-destructive-darker border-destructive-light',
                 default => 'bg-white border-slate-300',
             }
         ])
    >
        <div {{$content->attributes}} @if($trap) x-trap.noreturn="$popover.isShown" @endif>
            {{$content}}
        </div>

        @if($arrow)
            <x-floating-arrow/>
        @endif
    </div>
</div>