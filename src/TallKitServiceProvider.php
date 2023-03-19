<?php

namespace TallKit\Components;

use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class TallKitServiceProvider extends ServiceProvider
{
    public function register(): void
    {
    }

    public function boot(): void
    {
        View::addLocation(__DIR__ . '/../resources/views');
    }
}