<div role="group"
    {{$attributes->class([
      'flex',
      '[&>*]:rounded-none',
      '[&>*:focus-within]:z-10',
      '[&>*:not(:first-child)]:-ml-px',
      '[&>*:first-child]:rounded-l-md',
      '[&>*:last-child]:rounded-r-md',
      '[&>*>[x-input]]:rounded-none',
      '[&>*:first-child>[x-input]]:rounded-l-md',
      '[&>*:last-child>[x-input]]:rounded-r-md',
    ])}}
>
    {{$slot}}
</div>
