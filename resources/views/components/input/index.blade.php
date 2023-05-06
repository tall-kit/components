@aware(['id', 'error'])
@props(['size' => 'md'])
<input
    @isset($id) id="{{$id}}" @endisset
    {{$attributes->merge(['type' => 'text'])->class([
        'shadow-sm block w-full rounded-md border transition',
        'border-slate-300 focus:border-primary focus:ring focus:ring-primary-light' => $error === null || !$errors->has($error),
        'border-destructive-light text-destructive-darker placeholder-destructive-light focus:outline-none focus:ring-destructive focus:border-destructive' => $error && $errors->has($error),
        match ($size) {
            'sm' => 'px-2 py-1 text-xs',
            'md' => 'px-3 py-1.5 text-sm',
            'lg' => 'px-4 py-2 text-base',
            'xl' => 'px-5 py-3 text-xl',
        }
    ])}}
>
