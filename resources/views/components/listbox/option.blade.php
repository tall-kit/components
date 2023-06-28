@props(['data'])
<div x-listbox:option="{{json_encode($data)}}"
     x-bind:class="{
        'bg-neutral-lighter': $listboxOption.isActive,
        'opacity-50': $listboxOption.isDisabled,
     }"
     {{$attributes
        ->merge(['value' => null])
        ->class(['flex items-center text-gray-900 relative cursor-default select-none py-2 pl-2 pr-9 mx-1 rounded-md text-sm outline-none'])}}>
    <span class="block truncate" x-bind:class="$listboxOption.isSelected && 'font-semibold'" x-text="$listboxOption.name"></span>
    <span x-show="$listboxOption.isSelected"
          class="text-primary absolute inset-y-0 right-0 flex items-center pr-4">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
          </svg>
    </span>
</div>