<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Notification;
use App\Notifications\TransactionNotification;

class AdminTransactionController extends Controller
{
    public function transactions()
    {
        $transactions = Transaction::all();

        return Inertia::render('Admin/Transactions',[
            'transactions'=>$transactions,
        ]);
    }

    public function confirmPayment(Request $request)
    {
        $transactionId = $request['transactionId'];
        $transaction = Transaction::find($transactionId);
        $transaction->status_transaksi = 'To Ship';
        $transaction->save();

        $notificationData = [
            'type'=>'transactionNotification',
            'body'=>'Bukti pembayaran Anda disetujui oleh Admin Rabbani Mall. Orderan nomor #'.$transactionId.' sedang dikemas.',
            'transactionId'=>$transactionId,
        ];

        $user = User::find($transaction->user_id);
        Notification::send($user, new TransactionNotification($notificationData));

        $transaction->status_transaksi = 'To Receive';
        $transaction->save();

        $notificationData = [
            'type'=>'transactionNotification',
            'body'=>'Orderan nomor #'.$transactionId.' sudah sampai. Klik terima untuk memastikan Anda menerima orderan.',
            'transactionId'=>$transactionId,
        ];
        Notification::send($user, new TransactionNotification($notificationData));


        return redirect()->back()->with(
            'alert',
            [
                'type' => 'success',
                'message' => 'Sukses mengubah status'
            ]);
    }
}
