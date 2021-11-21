<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use GuzzleHttp\Handler\Proxy;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function products()
    {
        $dt = date("Y-m-d", strtotime("-1 months"));
        $sql_string = "'".$dt."'";
        $new_arrivals = Product::where('created_at', '>=', DB::raw($sql_string))->get();
        foreach ($new_arrivals as $key => $product) {
            $product->image = $product->productDetails->first()->image;
            $product->harga = $product->productDetails->first()->harga;
        }

        $all_products = Product::all();
        foreach ($all_products as $key => $product) {
            $product->image = $product->productDetails->first()->image;
            $product->harga = $product->productDetails->first()->harga;
        }

        return view('product.all')
            ->with(compact('new_arrivals'))
            ->with(compact('all_products'));
    }

    public function productDetail($id)
    {
        $product = Product::find($id);
        $product->colors = $product->productDetailsByColor();
        $product->sizes = $product->productDetailsBySize();

        // dd($product);
        // $product->colors = $product->colors->toArray();
        // $product = $product->toArray();
        // $product['colors'] = $product['colors']->toArray();
        // $product['sizes'] = $product['sizes']->toArray();
        // dd($product->colors);
        return Inertia::render('Product/ProductDetail',[
            'product'=>$product,
        ]);
        // return view('product.show')->with(compact('product'));
    }
}
