@aware(['color' => 'neutral', 'variant' => 'soft'])
@props(['href' => null])
@php
    $tag = $href ? 'a' : 'div';
@endphp
<{{$tag}} wire:ignore.self
     x-menu:item
     x-bind:class="{
        'cursor-pointer bg-[var(--background)] text-[color:var(--foreground)] border-[var(--border)]': $menuitem.isActive,
        'text-gray-400 pointer-events-none': $menuitem.isDisabled,
        'text-gray-700': !$menuitem.isActive && !$menuitem.isDisabled
     }"
     {{$attributes->merge(['href' => $href])->class([
        'select-none block mx-1 rounded-md p-2 text-sm flex items-center outline-none',
        "component-{$variant}-{$color}"
     ])}}
>
    {{$slot}}
</{{$tag}}>