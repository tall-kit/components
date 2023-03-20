<?php

namespace TallKit\Components;

use Illuminate\Support\ServiceProvider;
use Illuminate\View;

class TallKitComponentsServiceProvider extends ServiceProvider
{
    public function register(): void
    {
    }

    public function boot(): void
    {
        $this->callAfterResolving(View\Factory::class, function (View\Factory $factory) {
            $factory->addLocation(__DIR__ . '/../resources/views');
        });
    }
}