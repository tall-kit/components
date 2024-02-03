@props([
    'delay' => 0,
    'offset' => 12,
    'placement' => 'top',
    'arrow' => true,
    'flip' => true,
    'shift' => true,
    'overlay' => false,
    'interactive' => false,
    'color' => 'neutral',
    'variant' => 'outline'
])
<template x-teleport="body">
    <div x-cloak
         x-tooltip="{{json_encode(['placement' => $placement])}}"
         {{$attributes->class("component-$variant-$color bg-[var(--background)] text-[color:var(--foreground)] border-[var(--floating-border)] z-20 absolute left-0 top-0 px-2 py-1 shadow-lg rounded-md border")}}
    >
        {{$slot}}
        @if($arrow)
            <div x-tooltip:arrow
                 x-bind:class="{
                       '-mb-1.5 rotate-180': $tooltip.placementSide === 'top',
                       '-mt-1.5': $tooltip.placementSide === 'bottom',
                       '-ml-1.5 -rotate-90': $tooltip.placementSide === 'right',
                       '-mr-1.5 rotate-90': $tooltip.placementSide === 'left',
                  }"
                 class="component-{{$variant}}-{{$color}} absolute w-3.5 h-3.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 21 21" width="21" height="9" role="presentation">
                    <g fill="none" fill-rule="evenodd">
                        <path class="text-[var(--floating-border)]" fill="currentColor" d="M1 9.092h19l-6.402-6.74c-1.717-1.806-4.485-1.8-6.196 0L1 9.093zM20.342 8l-6.02-6.336c-2.108-2.22-5.538-2.218-7.645 0L.658 8h19.684z"></path>
                        <path class="text-[var(--background)]" fill="currentColor" d="M7.402 2.353c1.711-1.801 4.48-1.807 6.196 0L20 9.093H1l6.402-6.74z"></path>
                    </g>
                </svg>
            </div>
        @endif
    </div>
</template>