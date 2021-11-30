<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Providers\RajaOngkir;
use App\Repositories\ProductRepository;

class HomeController extends Controller
{
    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }

    public function landingPage()
    {
        $response = $this->repository->getAll();
        $products = ProductResource::collection($response['data']);

        return Inertia::render('Home', [
            'products'=>$products,
        ]);
    }

    public function testReact()
    {
        return Inertia::render('Home');
    }

    public function rajaOngkir()
    {
        $init = new RajaOngkir(true);
        $cost = $init->getCost(152,444, 1, 'jne');
        echo "<pre>", var_dump(json_decode($cost)), "</pre>";
    }
}
