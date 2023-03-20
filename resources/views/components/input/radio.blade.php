@aware(['id', 'error'])
<input
    type="radio"
    @isset($id) id="{{$id}}" @endisset
    {{$attributes->class([
        'h-4 w-4 border-slate-300',
        'text-primary-600 focus:ring-primary-500' => $error === null || !$errors->has($error),
        'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' => $error && $errors->has($error)
    ])}}
>
