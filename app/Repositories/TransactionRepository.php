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
            $model->status_transaksi    = $data['status_transaksi'];
            $model->bukti_pembayaran    = $data['bukti_pembayaran'];
            $model->kode_voucher        = $data['kode_voucher'];
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
            $data = $this->model->with('transactionDetails')->find($id);
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

            return ['success' => true, 'data' => $data, 'message' => 'Payment proof uploaded successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
