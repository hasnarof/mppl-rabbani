<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransactionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $transactions = [
            [
                'user_id'=>'2',
                'total_harga'=>503040,
                'ongkir'=>17000,
                'total_bersama_ongkir'=>520040,
                'status_transaksi'=>'To Pay',
                'kurir'=>'jne',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'user_id'=>'2',
                'total_harga'=>503040,
                'ongkir'=>17000,
                'total_bersama_ongkir'=>520040,
                'status_transaksi'=>'To Pay',
                'kurir'=>'jne',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
        ];
        DB::table('transactions')->insert($transactions);

    }
}
