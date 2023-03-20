@props(['error' => null, 'label' => null, 'id' => null])
<div {{$attributes->class('space-y-1')}}>
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
