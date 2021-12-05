<?php

namespace App\Models;

use App\Models\Review;
use App\Utilities\FilterBuilder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['nama','detail','kategori_pakaian','kategori_gender','is_best_seller','created_at','updated_at'];

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

    public function scopeFilterBy($query, $filters) {
        $namespace = 'App\Utilities\ProductFilters';
        $filter = new FilterBuilder($query, $filters, $namespace);

        return $filter->apply();
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
