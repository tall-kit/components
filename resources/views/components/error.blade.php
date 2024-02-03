@props(['for' => null])
@if($for)
    @error($for)
        <p wire:transition.in
           wire:key="{{$for}}-error"
           x-error
           {{$attributes->class('component-outline-error text-[color:var(--foreground)] text-sm')}}
        >
            {{$message}}
        </p>
    @enderror
@else
    <p {{$attributes->class('component-outline-error text-[color:var(--foreground)] text-sm')}}>
        {{$slot}}
    </p>
@endif
