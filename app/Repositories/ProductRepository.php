<?php

namespace App\Repositories;

use App\Models\Product;
use Exception;
use Illuminate\Support\Facades\DB;

class ProductRepository extends Repository
{
    public function __construct(Product $model)
    {
        $this->model = $model;
    }

    public function save(array $data, $id = null)
    {
        try {
            $model = ($id === null) ? new Product() : Product::find($id);
            $model->nama                = $data['nama'];
            $model->detail              = $data['detail'];
            $model->kategori_pakaian    = $data['kategori_pakaian'];
            $model->kategori_gender     = $data['kategori_gender'];
            $model->is_best_seller      = $data['is_best_seller'];
            $model->save();

            return ['success' => true, 'data' => $model, 'message' => 'Product saved successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function getAll()
    {
        try {
            $dt = date("Y-m-d", strtotime("-1 months"));
            $sql_string = "'".$dt."'";

            $new_arrivals = Product::where('created_at', '>=', DB::raw($sql_string))->get();
            foreach ($new_arrivals as $key => $product) {
                $product->image = $product->productDetails->first()->image;
                $product->harga = $product->productDetails->first()->harga;
            }

            $all_products = Product::all();
            foreach ($all_products as $key => $product) {
                $product->image = $product->productDetails->first()->image;
                $product->harga = $product->productDetails->first()->harga;
            }

            return ['success' => true, 'new_arrivals' => $new_arrivals, 'all_products' => $all_products];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    public function findOne($id)
    {
        try {
            $data = $this->model->find($id);
            $data->colors = $this->productDetailsByColor($id);
            $data->sizes = $this->productDetailsBySize($id);
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
            return ['success' => true, 'message' => 'Product deleted successfully'];
        } catch (Exception $e) {
            return ['success' => false, 'message' => $e->getMessage()];
        }
    }

    private function productDetailsByColor($id)
    {
        // TODO - refactor raw query
        $product_details = DB::select(DB::raw("
            SELECT warna, harga, image
            FROM product_details
            WHERE product_id = ".$id."
            GROUP BY warna, harga, image
            order by id
        "));

        return $product_details;
    }

    private function productDetailsBySize($id)
    {
        // TODO - refactor raw query
        $product_details = DB::select(DB::raw("
            SELECT ukuran, harga
            FROM product_details
            WHERE product_id = ".$id."
            GROUP BY ukuran, harga
            order by id
        "));

        return $product_details;
    }
}
