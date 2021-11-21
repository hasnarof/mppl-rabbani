<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function cart(Request $request)
    {
        return Inertia::render('Payment/BasketFull');
    }

    public function checkout()
    {
        foreach($request as $r) {
            $product_id = $r['product']['id'];
            $color = $r['productColor']['warna'];
            $size = $r['productSize']['ukuran'];
            $quantity = $r['qty'];
        }
    }
}
