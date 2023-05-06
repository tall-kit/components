@aware(['variant'])
<div x-floating:arrow @class([
        'absolute w-3 h-3 rounded-sm rotate-45',
        match ($variant) {
            'primary' => 'bg-primary-dark border-primary',
            'secondary' => 'bg-secondary-darker border-secondary-dark',
            'destructive' => 'bg-destructive-lighter border-destructive-light',
            default => 'bg-white border-slate-300'
        }
])
x-bind:class="{
     '-mb-1.5 border-b border-r': $floating.placementSide === 'top',
     '-mt-1.5 border-t border-l': $floating.placementSide === 'bottom',
     '-ml-1.5 border-b border-l': $floating.placementSide === 'right',
     '-mr-1.5 border-t border-r': $floating.placementSide === 'left',
}"
></div>