@aware(['id'])
<label @isset($id) for="{{$id}}" @endisset
    {{$attributes->class('block text-sm font-medium text-gray-700')}}
>
    {{$slot}}
</label>
