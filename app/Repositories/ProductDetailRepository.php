<?php

namespace App\Repositories;

use App\Models\ProductDetail;
use Exception;
use Illuminate\Support\Facades\DB;

class ProductDetailRepository extends Repository
{
    public function __construct(ProductDetail $model)
    {
        $this->model = $model;
    }

    public function save(array $data, $id = null)
    {
        try {
            $model = ($id === null) ? new ProductDetail() : ProductDetail::find($id);
            $model->product_id      = $data['product_id'];
            $model->nama            = $data['nama'];
            $model->image           = $data['image'];
            $model->warna           = $data['warna'];
            $model->ukuran          = $data['ukuran'];
            $model->ketersediaan    = $data['ketersediaan'];
            $model->harga           = $data['harga'];
            $model->save();

            return ['success' => true, 'data' => $model, 'message' => 'ProductDetail saved successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function getAll()
    {
        try {
            $data = $this->model->all();
            return ['success' => true, 'data' => $data];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function findOne($id)
    {
        try {
            $data = $this->model->find($id);
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
            return ['success' => true, 'message' => 'ProductDetail deleted successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function getWhereWarnaUkuranProductid($productId, $warna, $ukuran)
    {
        try {
            $data = $this->model
                ->where('product_id', $productId)
                ->where('warna', $warna)
                ->where('ukuran', $ukuran)
                ->first();
            return ['success' => true, 'data' => $data];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }
}
