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
        $dt = mktime(23,59, 59, 1, 1, 2015);
        $dt = date('Y-m-d H:i:s', $dt);
        
        $id = DB::table('products')->insertGetId([
            'nama'=>'Kerudung Instan Zerena',
            'detail'=>
            'Material<br>
            - Bahan HYGET POLOS<br>
            - Kualitas jahitan terbaik<br>
            -------------------------------------------<br>
            Pengiriman<br>
            Senin - Sabtu : 15.00 WIB<br>
            Minggu : Tidak ada pengiriman<br>
            -------------------------------------------<br>
            Mengenai  stock, semua yang ada di etalase ready.<br>
            -------------------------------------------<br>
            Notes :<br>
            - Tidak dapat ganti size atau artikel ketika pesanan sudah kami diproses (kecuali ada konfirmasi dari Admin langsung)<br>
            - Mohon untuk mengisi Nama Jelas, Alamat lengkap No rumah, RT, RW, Kec. Kab/Kota, patokan rumah dan No HP yang dapat dihubungi. Apabila pesanan sudah kami proses Alamat dan No HP tidak dapat di rubah.<br>
            - Tidak menerima penukaran barang/pengembalian dana  (kecuali kesalahan dari kami)<br>
            - Untuk pengajuan komplain pesanan max 3 hari setelah paket diterima disertakan unboxing paket.<br>
            <br>
            Kerudung Zerena<br>
            <br>
            Kerudung dengan style casual dan cutting-an bawah berbentuk lingkaran, dengan detail selip hidup kebagian bawan 3 baris dan dilengkapi scoder dibagian belakang yang multifungsi dapat dijadikan ear saver.<br>
            -------------------------------------------',
            'kategori_pakaian'=>'Kerudung',
            'kategori_gender'=>'Women',
            'created_at'=> $dt,
        ]);

        $warna1 = 'Hazelnut'; $warna2 = 'Blue Black'; $warna3 = 'Hitam'; $warna4 = 'Putih';
        $ukuran1 = 'S'; $ukuran2 = 'L'; $ukuran3 = 'XL';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 3; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama'=>'Kerudung Instan Zerena',
                    'image'=>'products/kerudung_instan_zerena_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>83840,
                    'created_at'=>$dt,
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

        $id = DB::table('products')->insertGetId([
            'nama'=>'Ginka Set',
            'detail'=>'Outfit oneset multifungsi yang bisa digunakan untuk hangout, kegiatan formal, ataupun untuk outfit rumahan. Terdapat dua item yaitu pants dan tops. Dilengkapi empat saku masing-masing dua dibagian depan tops dan disamping pantsnya. Bagian bawah pants dan topsnya terdapat tali serut dan Wudhu Friendly.',
            'kategori_pakaian'=>'Clothing',
            'kategori_gender'=>'Women',
            'created_at'=>now(),
        ]);

        $warna1 = 'Beige'; $warna2 = 'Terracota'; $warna3 = 'Dusty Pink'; $warna4 = 'Dark Grey';
        $ukuran1 = 'L'; $ukuran2 = 'S'; $ukuran3 = 'M';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 4; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama'=>'Ginka Set',
                    'image'=>'products/CLOTHING/GINKA_SET_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>369000,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

        $id = DB::table('products')->insertGetId([
            'nama'=>'Aiza Instan',
            'detail'=>'Hijab instan dengan bahan bubble bertekstur jeruk yang timbul, dilengkapi pet anti tembem, bahan adem menyerap keringat, cocok dipakai sebagai hijab rumah dan kegiatan sehari-hari.',
            'kategori_pakaian'=>'Kerudung',
            'kategori_gender'=>'Women',
            'created_at'=>now(),
        ]);

        $warna1 = 'Maroon'; $warna2 = 'Light Grey'; $warna3 = 'Pink Pastel'; $warna4 = 'Lavender';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 4; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama'=>'Aiza Instan',
                    'image'=>'products/HIJAB/AIZA_INSTAN_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>49000,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

        $id = DB::table('products')->insertGetId([
            'nama'=>'Mima',
            'detail'=>'Hijab pashmina yang lembut dengan bahan yang mudah diatur, adem, dan tegak di dahi. Bisa digunakan daily maupun formal. Dilengkapi dengan berbagai varian warna bold, netral dan pastel.',
            'kategori_pakaian'=>'Pashmina',
            'kategori_gender'=>'Women',
            'created_at'=>now(),
        ]);

        $warna1 = 'Brown Sugar'; $warna2 = 'Grey'; $warna3 = 'Wheat'; $warna4 = 'Sage';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 4; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama'=>'Mima',
                    'image'=>'products/PASHMINA/MIMA_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>79000,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

    }
}
