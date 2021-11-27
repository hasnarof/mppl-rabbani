<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Repositories\ProductRepository;

class ProductController extends Controller
{
    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }

    public function products()
    {
        $response = $this->repository->getAll();

        if ($response['success'] !== false) {
            $new_arrivals = $response['new_arrivals'];
            $all_products = $response['all_products'];

            return view('product.all')
                ->with(compact('new_arrivals'))
                ->with(compact('all_products'));
        }
        // return to error page
    }

    public function productDetail($id)
    {
        $response = $this->repository->findOne($id);

        if ($response['success'] !== false) {
            return Inertia::render('Product/ProductDetail',[
                'product'=>$response['data'],
            ]);
        }
        // return to error page
    }
}
