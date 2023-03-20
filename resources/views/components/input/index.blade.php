@aware(['id', 'error'])
<input
    @isset($id) id="{{$id}}" @endisset
    {{$attributes->merge(['type' => 'text'])->class([
        'shadow-sm block w-full sm:text-sm rounded-md',
        'border-slate-300 focus:ring-primary-500 focus:border-primary-500' => $error === null || !$errors->has($error),
        'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' => $error && $errors->has($error)
    ])}}
>
