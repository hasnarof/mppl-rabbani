<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function create($product_id)
    {
        $product = Product::find($product_id);
        $product->colors = $product->productDetailsByColor();
        $product->sizes = $product->productDetailsBySize();
        return Inertia::render('Review/Create', [
            'product'=>$product,
        ]);
    }

    public function store(Request $request)
    {

    }
}
