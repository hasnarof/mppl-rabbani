<?php

namespace App\Http\Controllers;

use App\Models\Product;
use GuzzleHttp\Handler\Proxy;
use Illuminate\Http\Request;
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
            $product->harga_produk = $product->productDetails->first()->harga_produk;
        }

        $all_products = Product::all();
        foreach ($all_products as $key => $product) {
            $product->image = $product->productDetails->first()->image;
            $product->harga_produk = $product->productDetails->first()->harga_produk;
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

        return view('product.show')->with(compact('product'));
    }
}
