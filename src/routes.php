<?php

use App\Controllers\InertiaController;
use Illuminate\Support\Facades\Route;

Route::get('/', [InertiaController::class, 'index']);
Route::inertia('about', 'about');
