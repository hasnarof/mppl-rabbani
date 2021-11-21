<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\ProductDetail;
use App\Models\TransactionDetail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class TransactionController extends Controller
{
    public function cart()
    {
        return Inertia::render('Payment/BasketFull');
    }

    public function checkout(Request $request)
    {
        $cart_items = $request['cartItems'];

        $transaction = Transaction::create([
            'user_id'=>Auth::id(),
        ]);

        $total_price = 0;
        foreach($cart_items as $c) {
            $product_id = $c['product']['id'];
            $color = $c['productColor']['warna'];
            $size = $c['productSize']['ukuran'];
            $price = $c['productSize']['harga'];
            $quantity = $c['qty'];

            $product_detail = ProductDetail::where('product_id', $product_id)
                ->where('warna', $color)
                ->where('ukuran', $size)
                ->first();

            $transaction_detail = TransactionDetail::create([
                'transaction_id'=>$transaction->id,
                'product_detail_id'=>$product_detail->id,
                'jumlah_produk'=>$quantity,
                'harga_per_produk'=>$price,
                'ukuran_produk'=>$size,
                'variasi_warna'=>$color,
            ]);

            $total_price += $quantity * $price;
        }

        $transaction->total_harga = $total_price;
        $transaction->save();

        return Inertia::render('Home');
    }

    public function transactions()
    {
        $transactions = Transaction::where('user_id', Auth::id())->with('transactionDetails')->get();
        return Inertia::render('Payment/Transactions',[
            'transactions'=>$transactions,
        ]);
    }

    public function transactionDetail($id)
    {
        $transaction = Transaction::find($id);
        $transaction_details = TransactionDetail::where('transaction_id',$id)->with('productDetail')->get();
        // dd($transaction_details);
        return Inertia::render('Payment/TransactionDetail',[
            'transaction'=>$transaction,
            'transactionDetails'=>$transaction_details,
        ]);
    }
}
