@props(['on' => ['click']])
<span {{$attributes->class(['inline-flex'])}} x-popover:trigger="{{json_encode($on)}}">
    {{$slot}}
</span>