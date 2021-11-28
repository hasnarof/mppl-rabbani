<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Providers\RajaOngkir;

class HomeController extends Controller
{
    public function landingPage()
    {
        $products = Product::all();
        foreach ($products as $key => $product) {
            $product->image = $product->productDetails->first()->image;
            $product->harga_produk = $product->productDetails->first()->harga_produk;
        }

        return Inertia::render('Home', [
            'products'=>$products,
        ]);

        return view('home')->with(compact('products'));
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
