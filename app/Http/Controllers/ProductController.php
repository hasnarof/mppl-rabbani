<?php

namespace App\Http\Controllers;

use App\Models\Product;
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

        $data = [
            'new_arrivals' => $new_arrivals,
            'all_products' => $all_products,
        ];

        return view('product.all')->with(compact('data'));
    }

    public function productDetail($id)
    {

    }
}
