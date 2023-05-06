@aware(['id', 'error'])
<input
    type="checkbox"
    @isset($id) id="{{$id}}" @endisset
    {{$attributes->class([
        'h-4 w-4 rounded transition border-slate-300',
        'text-primary focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary-light' => $error === null || !$errors->has($error),
        'border-error text-error-dark placeholder-error-light focus:outline-none focus:ring-error focus:border-error' => $error && $errors->has($error)
    ])}}
>
