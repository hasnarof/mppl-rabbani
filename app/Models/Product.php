<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    public function productDetails()
    {
        return $this->hasMany(ProductDetail::class);
    }

    public function productDetailsByColor()
    {
        $product_details = DB::select(DB::raw("
            SELECT warna, harga, image
            FROM product_details
            WHERE product_id = ".$this->id."
            GROUP BY warna, harga, image
            order by id
        "));

        return $product_details;
    }

    public function productDetailsBySize()
    {
        $product_details = DB::select(DB::raw("
            SELECT ukuran, harga
            FROM product_details
            WHERE product_id = ".$this->id."
            GROUP BY ukuran, harga
            order by id
        "));

        return $product_details;
    }

}
