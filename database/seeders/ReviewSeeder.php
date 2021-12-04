<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReviewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $reviews =  [
            [
                'user_id'=>2,
                'product_id'=>'1',
                'rating'=>5,
                'ulasan'=>'Bahannya adem.',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
            [
                'user_id'=>3,
                'product_id'=>'1',
                'rating'=>4,
                'ulasan'=>'Sukaaa banget deh!',
                'created_at'=>now(),
                'updated_at'=>now(),
            ],
        ];

        DB::table('reviews')->insert( $reviews);
    }
}
