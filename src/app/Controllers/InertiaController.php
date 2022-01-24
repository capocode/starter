<?php

namespace App\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class InertiaController extends Controller
{
    public function index()
    {
        if (!Cache::has('locations')) {
            $res = Http::get('https://bernie.docbs.com/api/locations');
            Cache::add('locations', $res->json(), now()->addSeconds(30));
        }

        $locations = Cache::get('locations');

        return inertia('inertia', [
            'locations' => $locations,
        ]);
    }
}
