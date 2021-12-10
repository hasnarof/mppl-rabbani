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
        // $response = $this->repository->getAll();

        // if ($response['success'] !== false) {
        //     return Inertia::render('Home', [
        //         'products'=>ProductResource::collection($response['data']),
        //     ]);
        // }
        // return $response['message'];

        $best_seller = Product::where('is_best_seller',1)->with('productDetails')->get();
        $all_products = Product::with('productDetails')->get();
        foreach ($best_seller as $key => $product) {
            $product->colors = $product->productDetailsByColor();
            $product->sizes = $product->productDetailsBySize();
        }
        foreach ($all_products as $key => $product) {
            $product->colors = $product->productDetailsByColor();
            $product->sizes = $product->productDetailsBySize();
        }
        return Inertia::render('Home',[
            'all_products'=>$all_products,
            'best_seller'=>$best_seller,
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
