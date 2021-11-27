<?php

namespace App\Models;

use App\Models\ProductDetail;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TransactionDetail extends Model
{
    use HasFactory;

    protected $fillable = ['transaction_id','product_detail_id','jumlah_produk','harga_per_produk',
        'ukuran_produk','variasi_warna'];

    public function productDetail()
    {
        return $this->belongsTo(ProductDetail::class);
    }

    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }
}
