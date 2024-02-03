@props(['inline' => false, 'disabled' => false])
<div x-field
    {{$attributes->class([
        'text-left',
        'space-y-1' => !$inline,
        'flex items-center space-x-2' => $inline,
    ])}}>
    {{$slot}}
</div>