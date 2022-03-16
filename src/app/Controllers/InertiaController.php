<?php

namespace App\Controllers;

use Illuminate\Routing\Controller;

class InertiaController extends Controller
{
    public function index()
    {
        return inertia('inertia');
    }
}
