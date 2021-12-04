<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Product;
use App\Http\Resources\ProductResource;
use App\Repositories\ProductRepository;

class ProductController extends Controller
{
    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }

    public function products()
    {
        if (request()->all()) {
            $response = $this->repository->filterBy(request()->all());
            return $response; // handle
        }

        $responseAll = $this->repository->getAll();
        $responseRecent = $this->repository->getRecent();

        if ($responseAll['success'] !== false && $responseRecent['success'] !== false) {
            $all_products = ProductResource::collection($responseAll['data']);
            $new_arrivals = ProductResource::collection($responseRecent['data']);

            return Inertia::render('Product/Products',[
                'new_arrivals'=>$new_arrivals,
                'all_products'=>$all_products,
            ]);
        }
        return abort(500);
    }

    public function productDetail($id)
    {
        // $product = Product::with('productDetails','reviews.user')->find($id);

        // dd($product);
        return Inertia::render('Product/ProductDetail',[
                'product'=>$response['data'],
        ]);
        $response = $this->repository->findOne($id);
        dd($response);
        if ($response['success'] !== false) {
            return Inertia::render('Product/ProductDetail',[
                'product'=>$response['data'],
            ]);
        }

        return abort(404);
    }
}
