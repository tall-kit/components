@aware(['id'])
<p class="text-sm text-red-600" @isset($id) id="{{$id}}-error" @endisset>
    {{$slot}}
</p>