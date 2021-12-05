<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\ProductDetail;
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
        // dd($request['files']);
        $product= Product::create([
            'nama'=>$request['form']['name'],
            'detail'=>$request['form']['description'],
            'kategori_pakaian'=>$request['form']['product_category'],
            'kategori_gender'=>$request['form']['gender_category'],
            'created_at'=>now(),
            'updated_at'=>now(),
        ]);

        $images = $request['files'];
        $uploadFolder = 'products';

        $ukurans = explode(',', $request['form']['size']);
        for ($i=0; $i < $request['colorsSize']; $i++) {
            $path = $images[$i]->storeAs($uploadFolder, $request['form']['name'] . '_'.$i.'.jpg', 'public');
            for ($j=0; $j < sizeof($ukurans); $j++) {

                ProductDetail::create([
                    'product_id'=>$product->id,
                    'nama'=>$request['form']['name'],
                    'image'=>$path,
                    'warna'=>$request['form']['color-'.$i],
                    'ukuran'=>$ukurans[$j],
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>$request['form']['price'],
                    'created_at'=>now(),
                    'updated_at'=>now(),
                ]);
            }
        }

        return redirect('admin/products')->with('alert', ['type'=>'success','message'=>'Product uploaded successfully']);
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
