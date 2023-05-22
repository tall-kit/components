@aware(['color'])
<div x-floating:arrow @class([
        'absolute w-3 h-3 rounded-sm rotate-45',
        match ($color) {
            'primary' => 'bg-primary-dark border-primary',
            'secondary' => 'bg-secondary-darker border-secondary-dark',
            'success' => 'bg-success-lighter border-success-light',
            'warning' => 'bg-warning-lighter border-warning-light',
            'error' => 'bg-error-lighter border-error-light',
            default => 'bg-white border-neutral-light',
       },
])
x-bind:class="{
     '-mb-1.5 border-b border-r': $floating.placementSide === 'top',
     '-mt-1.5 border-t border-l': $floating.placementSide === 'bottom',
     '-ml-1.5 border-b border-l': $floating.placementSide === 'right',
     '-mr-1.5 border-t border-r': $floating.placementSide === 'left',
}"
></div>