@aware(['color' => 'neutral', 'variant' => 'outline'])
<div x-floating:arrow
     x-bind:class="{
          '-mb-1.5 border-b border-r': $floating.placementSide === 'top',
          '-mt-1.5 border-t border-l': $floating.placementSide === 'bottom',
          '-ml-1.5 border-b border-l': $floating.placementSide === 'right',
          '-mr-1.5 border-t border-r': $floating.placementSide === 'left',
     }"
     class="component-{{$variant}}-{{$color}} bg-[var(--background)] border-[var(--floating-border)] absolute w-3 h-3 rounded-sm rotate-45"
></div>