<?php

namespace App\Repositories;

use App\Models\Transaction;
use Exception;

class TransactionRepository extends Repository
{
    public function __construct(Transaction $model)
    {
        $this->model = $model;
    }

    public function save(array $data, $id = null)
    {
        try {
            $model = ($id === null) ? new Transaction() : Transaction::find($id);
            $model->user_id             = $data['user_id'];
            $model->total_harga         = $data['total_harga'];
            $model->ongkir              = $data['ongkir'];
            $model->total_bersama_ongkir= $data['total_bersama_ongkir'];
            $model->status_transaksi    = $data['status_transaksi'];
            $model->bukti_pembayaran    = $data['bukti_pembayaran'];
            $model->kode_voucher        = $data['kode_voucher'];
            $model->kurir               = $data['kurir'];
            $model->jenis_pengiriman    = $data['jenis_pengiriman'];
            $model->jenis_pembayaran    = $data['jenis_pembayaran'];
            $model->save();

            return ['success' => true, 'data' => $model, 'message' => 'Transaction saved successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function getAll()
    {
        try {
            $data = $this->model->with('transactionDetails')->get();
            return ['success' => true, 'data' => $data];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function findOne($id)
    {
        try {
            $data = $this->model->with('transactionDetails.productDetail')->find($id);
            return ['success' => true, 'data' => $data];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function drop($id)
    {
        try {
            $product = $this->model->find($id);
            $product->delete();
            return ['success' => true, 'message' => 'Transaction deleted successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function getById($userId) {
        try {
            $data = $this->model->where('user_id', $userId)->with('transactionDetails')->get();
            return ['success' => true, 'data' => $data];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function uploadPaymentProof(array $data)
    {
        try {
            $image = $data['buktiPembayaran'];
            $uploadFolder = 'payments';
            $path = $image->store($uploadFolder, 'public');

            $transaction = $this->model->find($data['transactionId']);
            $transaction->bukti_pembayaran = $path;
            $transaction->status_transaksi = 'To Payment Confirm';
            $transaction->save();

            return ['success' => true, 'message' => 'Payment proof uploaded successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function updateStatusTransaksi($transactionId)
    {
        try {
            $transaction = $this->model->find($transactionId);
            $transaction->status_transaksi = 'Completed';
            $transaction->save();

            return ['success' => true, 'message' => 'status_transaksi uploaded successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }


    public function saveWithRequired(array $data, $id = null)
    {
        try {
            $model = ($id === null) ? new Transaction() : Transaction::find($id);
            $model->user_id = $data['user_id'];
            $model->status_transaksi = 'To Pay';
            $model->bukti_pembayaran = null;
            $model->kode_voucher = null;
            $model->jenis_pengiriman = null;
            $model->jenis_pembayaran = null;
            $model->save();
            return ['success' => true, 'data' => $model, 'message' => 'Transaction saved successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
