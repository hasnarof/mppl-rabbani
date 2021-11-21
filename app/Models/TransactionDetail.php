<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionDetail extends Model
{
    use HasFactory;

    protected $fillable = ['transaction_id','product_detail_id','jumlah_produk','harga_per_produk',
        'ukuran_produk','variasi_warna'];
}
