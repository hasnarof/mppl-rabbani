<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function landingPage()
    {
        $products = Product::all();
        foreach ($products as $key => $product) {
            $product->image = $product->productDetails->first()->image;
            $product->harga_produk = $product->productDetails->first()->harga_produk;
        }

        return view('home')->with(compact('products'));
    }
}
