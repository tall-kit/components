@props(['href' => null])
@php
    $tag = $href ? 'a' : 'div';
@endphp
<{{$tag}} x-menu:item
     x-bind:class="{
        'cursor-pointer bg-gray-100 text-gray-900': $menuitem.isActive,
        'text-gray-400 pointer-events-none': $menuitem.isDisabled,
        'text-gray-700': !$menuitem.isActive && !$menuitem.isDisabled
     }"
     {{$attributes->merge(['href' => $href])->class('select-none block mx-1 rounded-md p-2 text-sm flex items-center focus:outline-none')}}
>
    {{$slot}}
</{{$tag}}>