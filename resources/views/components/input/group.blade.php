@props(['inline' => false, 'error' => null, 'label' => null, 'id' => null])
<div {{$attributes->class([
        'text-left',
        'space-y-1' => !$inline,
        'flex items-center space-x-2' => $inline,
    ])}}>
    @if($label)
        <x-input.label>
            {{$label}}
        </x-input.label>
    @endif

    {{$slot}}

    @if($error)
        @error($error)
            <x-input.error>
                {{$message}}
            </x-input.error>
        @enderror
    @endif
</div>
