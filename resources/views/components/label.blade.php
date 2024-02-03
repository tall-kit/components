@aware(['disabled' => false])
<label x-label
        {{$attributes
            ->class([
                'block text-sm select-none font-medium text-gray-700',
                'opacity-50' => $disabled
            ])}}>
    {{$slot}}
</label>