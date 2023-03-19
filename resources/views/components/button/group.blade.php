<div role="group"
     {{$attributes->class('flex
           [&>*]:rounded-none
           [&>*:not(:first-child)]:-ml-px
           [&>*:first-child]:rounded-l-md
           [&>*:last-child]:rounded-r-md')}}
>
    {{$slot}}
</div>
