<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminTransactionController extends Controller
{
    public function transactions()
    {
        $transactions = Transaction::all();

        return Inertia::render('Admin/Transactions',[
            'transactions'=>$transactions,
        ]);
    }

    public function confirmPayment($transactionId)
    {
        $transaction = Transaction::find($transactionId);
        $transaction->status_transaksi = 'To Ship';
        $transaction->save();

        return redirect()->back()->with(
            'alert',
            [
                'type' => 'success',
                'message' => 'Sukses mengubah status'
            ]);
    }
}
