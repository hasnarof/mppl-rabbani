<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransactionDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $transactionDetails = [
            [
                'transaction_id'=>1,
                'product_detail_id'=>1,
                'jumlah_produk'=>5,
                'harga_per_produk'=>83840,
                'ukuran_produk'=>'S',
                'variasi_warna'=>'Hazelnut',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'transaction_id'=>1,
                'product_detail_id'=>5,
                'jumlah_produk'=>5,
                'harga_per_produk'=>83840,
                'ukuran_produk'=>'L',
                'variasi_warna'=>'Blue Black',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'transaction_id'=>2,
                'product_detail_id'=>1,
                'jumlah_produk'=>5,
                'harga_per_produk'=>83840,
                'ukuran_produk'=>'S',
                'variasi_warna'=>'Hazelnut',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'transaction_id'=>2,
                'product_detail_id'=>5,
                'jumlah_produk'=>5,
                'harga_per_produk'=>83840,
                'ukuran_produk'=>'L',
                'variasi_warna'=>'Blue Black',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
        ];
        DB::table('transaction_details')->insert($transactionDetails);
    }
}
