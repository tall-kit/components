@props(['label' => null])
<div x-listbox:group>
    @if($label)
        <div class="text-left p-2 mx-1 text-sm text-neutral-dark">
            {{$label}}
        </div>
    @endif
    {{$slot}}
</div>