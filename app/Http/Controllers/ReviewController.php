<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Review;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Repositories\ProductRepository;
use stdClass;

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
        $form = array();
        parse_str($request['form'], $form);
        Review::create([
            'user_id'=>Auth::id(),
            'product_id'=>$request['product_id'],
            'rating'=>$request['rating'],
            'ulasan'=>$form['testimonial'],
            'is_recommended'=>$form['is_recommended'],
        ]);

        $alert = ['type'=>'success','message' => 'Successfully created new review.'];
        return redirect('product/'.$request['product_id'])->with($alert);
    }

    public function reviews($product_id)
    {
        $product = Product::with('reviews.user')->find($product_id);
        $product->colors = $product->productDetailsByColor();
        $product->sizes = $product->productDetailsBySize();
        // $reviews = Review::where('product_id',$product_id)->get();
        return Inertia::render('Review/Reviews', [
            'product'=>$product,
        ]);
    }
}
