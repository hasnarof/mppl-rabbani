<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Providers\RajaOngkir;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\TransactionResource;
use App\Repositories\TransactionRepository;
use App\Repositories\ProductDetailRepository;
use App\Repositories\TransactionDetailRepository;

class TransactionController extends Controller
{
    public function __construct(TransactionRepository $repository, TransactionDetailRepository $transactionDetailRepository, ProductDetailRepository $productDetailRepository)
    {
        $this->repository = $repository;
        $this->transactionDetailRepository = $transactionDetailRepository;
        $this->productDetailRepository = $productDetailRepository;
    }

    public function cart()
    {
        return Inertia::render('Payment/BasketFull');
    }

    public function checkout(Request $request)
    {
        $cart_items = $request['cartItems'];
        $ongkir = $request['ongkir'];
        $kurir = $request['kurir'];

        $response = $this->repository->saveWithRequired(['user_id' => Auth::id()]);

        if ($response['success'] !== false) {
            $transaction = $response['data'];
        } else {
            return $response['message'];
        }

        $total_price = 0;
        foreach ($cart_items as $c) {
            $productId = $c['product']['id'];
            $warna = $c['productColor']['warna'];
            $ukuran = $c['productSize']['ukuran'];
            $price = $c['productSize']['harga'];
            $quantity = $c['qty'];

            $productDetailResponse = $this
                ->productDetailRepository
                ->getWhereWarnaUkuranProductid($productId, $warna, $ukuran);

            if ($productDetailResponse['success'] !== false) {
                $productDetail = $productDetailResponse['data'];
            } else {
                return $productDetailResponse['message'];
            }

            $transactionDetailResponse = $this->transactionDetailRepository->save([
                'transaction_id' => $transaction->id,
                'product_detail_id' => $productDetail->id,
                'jumlah_produk' => $quantity,
                'harga_per_produk' => $price,
                'ukuran_produk' => $ukuran,
                'variasi_warna' => $warna,
            ]);

            if ($transactionDetailResponse['success'] === false) {
                return $transactionDetailResponse['message'];
            }

            $total_price += $quantity * $price;
        }

        $transaction->total_harga = $total_price;
        $transaction->ongkir = $ongkir;
        $transaction->total_bersama_ongkir = $total_price + $ongkir;
        $transaction->kurir = $kurir;

        $response = $this->repository->save($transaction->toArray(), $transaction->id);

        if ($response['success'] !== false) {
            // return Inertia::render('Home');
            return redirect('transactions');
        }
        return $response['message'];
    }

    public function transactions()
    {
        $userId = Auth::id();
        $response = $this->repository->getById($userId);

        if ($response['success'] !== false) {
            return Inertia::render('Payment/Transactions',[
                'transactions' => TransactionResource::collection($response['data']),
            ]);
        }
        return $response['message'];
    }

    public function transactionDetail($id)
    {
        // $transaction = Transaction::with('user','transactionDetails')->where('id', $id)->first();

        // return Inertia::render('Payment/TransactionDetail',[
        //     'transaction' => $transaction,
        // ]);

        $response = $this->repository->findOne($id);
        // $user = User::find($response['data']->user_id);

        if ($response['success'] !== false) {
            return Inertia::render('Payment/TransactionDetail',[
                'transaction' => new TransactionResource($response['data']),
                // 'user'=>$user,
            ]);
        }
        return $response['message'];
    }

    public function uploadPaymentProof(Request $request)
    {
        $data = $request->all();

        if ($data['buktiPembayaran'] === null) {
            return abort(403);
        }

        $response = $this->repository->uploadPaymentProof($data);

        if ($response['success'] !== false) {
            return redirect()->route(
                'transaction', ['id' => $request['transactionId']])->with(
                    'alert',
                    [
                        'type' => 'success',
                        'message' => $response['message']
                    ]);
        }
        return $response['message'];
    }

    public function receiveOrder(Request $request)
    {
        $response = $this->repository->updateStatusTransaksi($request['transactionId']);

        if ($response['success'] !== false) {
            return redirect()->back()->with(
                'alert',
                [
                    'type' => 'success',
                    'message' => $response['message']
                ]);
        }
    }

    public function cekOngkir($kotaPembeli, $kurir)
    // public function cekOngkir()
    {
        $init = new RajaOngkir(false);
        $cost = $init->getCost(55,$kotaPembeli, 1, $kurir); // asal bekasi kota
        // $cost = $init->getCost(55,155, 1, 'pos'); // asal bekasi kota
        $cost = array( json_decode($cost) ); // ini jangan di uncomment yah
        $cost = $cost[0]->rajaongkir->results;
        $jenisLayanan = $cost[0]->costs[0]; // ekonomis
        $end = $jenisLayanan->cost[0]->value;

        return json_encode($end);
    }
}
