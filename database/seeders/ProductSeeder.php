<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $id = DB::table('products')->insertGetId([
            'nama_produk'=>'Kerudung Instan Zerena',
            'kategori_pakaian'=>'Kerudung',
            'kategori_gender'=>'Women',
            'created_at'=>now(),
        ]);

        $warna1 = 'Hazelnut'; $warna2 = 'Blue Black'; $warna3 = 'Hitam'; $warna4 = 'Putih';
        $ukuran1 = 'S'; $ukuran2 = 'L'; $ukuran3 = 'XL';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 3; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama_produk'=>'Kerudung Instan Zerena',
                    'image'=>'products/kerudung_instan_zerena_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga_produk'=>83840,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

        $id = DB::table('products')->insertGetId([
            'nama_produk'=>'Tunik Dara Ziva Kuma',
            'kategori_pakaian'=>'Atasan',
            'kategori_gender'=>'Women',
            'created_at'=>now(),
        ]);

        $warna1 = 'Mustard'; $warna2 = 'Merah Maroon'; $warna3 = 'Hitam';
        $ukuran1 = 'L'; $ukuran2 = 'S'; $ukuran3 = 'M';
        for ($i=1; $i <= 3; $i++) {
            for ($j=1; $j <= 3; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama_produk'=>'Tunik Dara Ziva Kuma',
                    'image'=>'products/tunik_dara_ziva_kuma_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga_produk'=>211840,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

        $id = DB::table('products')->insertGetId([
            'nama_produk'=>'Tunik Khufa',
            'kategori_pakaian'=>'Atasan',
            'kategori_gender'=>'Women',
            'created_at'=>now(),
        ]);

        $warna1 = 'Hitam'; $warna2 = 'Abu muda/Light Grey'; $warna3 = 'Navy';
        $ukuran1 = 'S'; $ukuran2 = 'M'; $ukuran3 = 'L'; $ukuran4 = 'XL';
        for ($i=1; $i <= 3; $i++) {
            for ($j=1; $j <= 4; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama_produk'=>'Tunik Khufa',
                    'image'=>'products/tunik_khufa_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga_produk'=>211840,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

    }
}
