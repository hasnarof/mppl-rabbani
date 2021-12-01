<?php

namespace App\Repositories;

use App\Models\TransactionDetail;
use Exception;

class TransactionDetailRepository extends Repository
{
    public function __construct(TransactionDetail $model)
    {
        $this->model = $model;
    }

    public function save(array $data, $id = null){
        try {
            $model = ($id === null) ? new TransactionDetail() : TransactionDetail::find($id);
            $model->transaction_id          = $data['transaction_id'];
            $model->product_detail_id       = $data['product_detail_id'];
            $model->jumlah_produk           = $data['jumlah_produk'];
            $model->harga_per_produk        = $data['harga_per_produk'];
            $model->ukuran_produk           = $data['ukuran_produk'];
            $model->variasi_warna           = $data['variasi_warna'];
            $model->save();

            return ['success' => true, 'data' => $model, 'message' => 'Transaction detail saved successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function getAll(){
        try {
            $data = $this->model->with('productDetail', 'transaction')->get();
            return ['success' => true, 'data' => $data];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function findOne($id){
        try {
            $data = $this->model->with('productDetail', 'transaction')->find($id);
            return ['success' => true, 'data' => $data];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function drop($id){
        try {
            $product = $this->model->find($id);
            $product->delete();
            return ['success' => true, 'message' => 'Transaction Detail deleted successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
