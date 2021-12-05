<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Repositories\ProductRepository;

class AdminProductController extends Controller
{
    public function products()
    {
        $all_products = Product::with('productDetails')->get();
        foreach ($all_products as $key => $product) {
            $product->colors = $product->productDetailsByColor();
            $product->sizes = $product->productDetailsBySize();
        }

        return Inertia::render('Admin/Product/Products',[
            'all_products'=>$all_products,
        ]);

    }

    public function create()
    {
        return Inertia::render('Admin/Product/Create',[

        ]);
    }

    public function store(Request $request)
    {
        dd($request);
    }

    public function edit($product_id)
    {

    }

    public function update(Request $request)
    {

    }

    public function destroy(Request $request)
    {

    }


}
