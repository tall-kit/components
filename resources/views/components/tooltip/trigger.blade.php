@props(['hover' => true, 'focus' => true])
<span {{$attributes->class(['inline-flex'])}} x-tooltip:trigger="{{json_encode(['hover' => $hover, 'focus' => $focus])}}">
    {{$slot}}
</span>