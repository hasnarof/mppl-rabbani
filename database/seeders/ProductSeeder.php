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
            'nama'=>'Zerena Instan',
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
            'kategori_pakaian'=>'Hijab',
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
            for ($j=1; $j <= 3; $j++) {
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
            'nama'=>'Jumpsuit',
            'detail'=>'Jumpsuit rekomendasi untuk tampilan casualmu. Dengan model yang simple dan bisa dikombinasikan dengan berbagai outfit seperti kemeja, blouse, atau outer. Dengan bahan yang adem, lentur dan ringan.',
            'kategori_pakaian'=>'Clothing',
            'kategori_gender'=>'Women',
            'is_best_seller'=>1,
            'created_at'=>now(),
        ]);

        $warna1 = 'Black'; $warna2 = 'Broken White'; $warna3 = 'Grey'; $warna4 = 'Light Grey';
        $ukuran1 = 'S'; $ukuran2 = 'M'; $ukuran3 = 'L';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 3; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama'=>'Jumpsuit',
                    'image'=>'products/CLOTHING/JUMPSUIT_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>179000,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

        $id = DB::table('products')->insertGetId([
            'nama'=>'Lica Set',
            'detail'=>'One set rok yang terdiri dari outer dan rok. Terdapat 3 saku yaitu 2 saku dibagian depan tops dan 1 saku tersembunyi disebelah kanan rok.
            Outer : Atasan cantik dengan model rimpel dibagian pinggang (peplum), dipermanis dengan 2 saku dibagian kiri dan kanan serta 1 kancing dibagian lengan
            Rok : rok bawahan polos model umbrella dengan 1 saku sembunyi dibagian kanan',
            'kategori_pakaian'=>'Clothing',
            'kategori_gender'=>'Women',
            'created_at'=>now(),
        ]);

        $warna1 = 'Army'; $warna2 = 'Cream'; $warna3 = 'Navy'; $warna4 = 'Soft Brown';
        $ukuran1 = 'S'; $ukuran2 = 'M'; $ukuran3 = 'L';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 3; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama'=>'Lica Set',
                    'image'=>'products/CLOTHING/LICA_SET_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>379000,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

        $id = DB::table('products')->insertGetId([
            'nama'=>'Rumi Set',
            'detail'=>'Outfit oneset multifungsi yang bisa digunakan untuk hangout, kegiatan formal, ataupun untuk outfit rumahan. Terdapat dua item yaitu pants dan tops. Dilengkapi empat saku masing-masing dua dibagian depan tops dan disamping pantsnya. Bagian bawah pants dan topsnya terdapat tali serut. Wudhu Friendly',
            'kategori_pakaian'=>'Clothing',
            'kategori_gender'=>'Women',
            'created_at'=>now(),
        ]);

        $warna1 = 'Army'; $warna2 = 'Blue Pastel'; $warna3 = 'Terracota'; $warna4 = 'Broken White';
        $ukuran1 = 'S'; $ukuran2 = 'M'; $ukuran3 = 'L';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 3; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama'=>'Rumi Set',
                    'image'=>'products/CLOTHING/RUMI_SET_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>379000,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

        $id = DB::table('products')->insertGetId([
            'nama'=>'Soren Outer',
            'detail'=>'Outer linen timeless dengan cutting oversized dan drop shoulder. Dilengkapi kerah, hidden pocket di bagian sisinya, dan juga aksen kerut di bagian lengan. Pada bagian depan terdapat satu button yang membuatnya semakin simple but chic.',
            'kategori_pakaian'=>'Clothing',
            'kategori_gender'=>'Women',
            'is_best_seller'=>1,
            'created_at'=>now(),
        ]);

        $warna1 = 'Creamy'; $warna2 = 'Dusty'; $warna3 = 'Matcha';
        $ukuran1 = 'S'; $ukuran2 = 'M'; $ukuran3 = 'L';
        for ($i=1; $i <= 3; $i++) {
            for ($j=1; $j <= 3; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama'=>'Soren Outer',
                    'image'=>'products/CLOTHING/SOREN_OUTER_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>249000,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

        $id = DB::table('products')->insertGetId([
            'nama'=>'Aiza Instan',
            'detail'=>'Hijab instan dengan bahan bubble bertekstur jeruk yang timbul, dilengkapi pet anti tembem, bahan adem menyerap keringat, cocok dipakai sebagai hijab rumah dan kegiatan sehari-hari.',
            'kategori_pakaian'=>'Hijab',
            'kategori_gender'=>'Women',
            'created_at'=>now(),
        ]);

        $warna1 = 'Maroon'; $warna2 = 'Light Grey'; $warna3 = 'Pink Pastel'; $warna4 = 'Lavender';
        $ukuran1 = 'All Size';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 1; $j++) {
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
            'nama'=>'Haraa Voal',
            'detail'=>'Hijab segiempat dengan aksen lasercut di setiap sisinya, dengan berbagai pilihan warna lengkap. Memiliki ketebalan yang pas, bisa penggunaan biasa dan syari. Tidak licin dan menyerap keringat. Cocok digunakan untuk sehari-hari dan formal.',
            'kategori_pakaian'=>'Hijab',
            'kategori_gender'=>'Women',
            'created_at'=>now(),
        ]);

        $warna1 = 'Brown Sugar'; $warna2 = 'Creamy'; $warna3 = 'Navy'; $warna4 = 'Pink Pastel';
        $ukuran1 = 'All Size';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 1; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama'=>'Haraa Voal',
                    'image'=>'products/HIJAB/HARAA_VOAL_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>99000,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }
        $id = DB::table('products')->insertGetId([
            'nama'=>'Hawa Instan',
            'detail'=>'Hijab instan yang dilengkapi tali, dengan bahan yang adem, ringan, dan tidak menerawang. Cocok digunakan sebagai khimar harianmu karena anti ribet, dan nyaman walau dipakai seharian.',
            'kategori_pakaian'=>'Hijab',
            'kategori_gender'=>'Women',
            'created_at'=>now(),
        ]);

        $warna1 = 'Black'; $warna2 = 'Lavender'; $warna3 = 'Peony'; $warna4 = 'Sparrow';
        $ukuran1 = 'All Size';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 1; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama'=>'Hawa Instan',
                    'image'=>'products/HIJAB/HAWA_INSTAN_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>69000,
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
            'is_best_seller'=>1,
            'created_at'=>now(),
        ]);

        $warna1 = 'Brown Sugar'; $warna2 = 'Grey'; $warna3 = 'Wheat'; $warna4 = 'Sage';
        $ukuran1 = 'All Size';
        for ($i=1; $i <= 4; $i++) {
            for ($j=1; $j <= 1; $j++) {
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

        $id = DB::table('products')->insertGetId([
            'nama'=>'Plisket',
            'detail'=>'Pashmina bertesktur half plisket yang bergelombang dan timbul. Pada kedua ujung tidak bertekstur plisket. Cocok dipakai untuk semua kegiatan, daily maupun formal',
            'kategori_pakaian'=>'Pashmina',
            'kategori_gender'=>'Women',
            'is_best_seller'=>1,
            'created_at'=>now(),
        ]);

        $warna1 = 'Soft Pink'; $warna2 = 'Steel Blue'; $warna3 = 'Tumeric';
        $ukuran1 = 'All Size';
        for ($i=1; $i <= 3; $i++) {
            for ($j=1; $j <= 1; $j++) {
                $product_detail = [
                    'product_id'=>$id,
                    'nama'=>'Plisket',
                    'image'=>'products/PASHMINA/PLISKET_'.$i.'.jpg',
                    'warna'=>${"warna" . $i},
                    'ukuran'=>${"ukuran" . $j},
                    'ketersediaan'=>rand(0, 50),
                    'harga'=>89000,
                    'created_at'=>now(),
                ];
                DB::table('product_details')->insert($product_detail);
            }
        }

    }
}
