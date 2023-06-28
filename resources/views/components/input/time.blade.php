@aware(['id', 'error'])
@props(['size' => 'md'])
<div
        @isset($id) id="{{$id}}" @endisset
        x-time
        {{$attributes->class([
            'bg-white shadow-sm w-auto rounded-md border transition inline-flex items-center',
            'border-destructive-light text-destructive-darker placeholder-destructive-light focus:outline-none focus:ring-destructive focus:border-destructive' => $error && $errors->has($error),
            match ($size) {
                'sm' => 'p-0.5 text-xs',
                'md' => 'p-1 text-sm',
                'lg' => 'p-1.5 text-base',
                'xl' => 'p-2.5 text-xl',
            }
        ])}}
        x-bind:class="{
           'border-primary ring ring-primary-light z-10' : $time.isActive
        }"
>
        <div x-time:hours
             class="caret-transparent rounded-md outline-none focus:bg-neutral-light px-1 py-0.5"
             min="0"
             max="23"
             x-text="$hours.isEmpty ? '––' : $hours.formatted"></div>
        <div aria-hidden="true" class="text-neutral">:</div>
        <div x-time:minutes
             class="caret-transparent rounded-md outline-none focus:bg-neutral-light px-1 py-0.5"
             min="0"
             max="59"
             x-text="$minutes.isEmpty ? '––' : $minutes.formatted"></div>

</div>