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
        
        // $product = Product::with('productDetails','reviews.user')->find($id);
        // $product->colors = $product->productDetailsByColor();
        // $product->sizes = $product->productDetailsBySize();
        // $productRepository = new ProductRepository(new Product());
        // $responseAll = $productRepository->getAll();
        // $responseRecent = $productRepository->getRecent();

        // if ($responseAll['success'] !== false && $responseRecent['success'] !== false) {
        //     $all_products = ProductResource::collection($responseAll['data']);
        //     $new_arrivals = ProductResource::collection($responseRecent['data']);

            return Inertia::render('Admin/Product/Products',[
                // 'new_arrivals'=>$new_arrivals,
                'all_products'=>$all_products,
            ]);
        // }
        // return Inertia::render('Admin/Product/Products',[
        //     'products' => $products,
        // ]);
    }

    public function create()
    {

    }

    public function store(Request $request)
    {

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
