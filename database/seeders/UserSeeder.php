<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $admin =  [
            'name'=> 'Admin Rabbani',
            'username'=>'adminrabbani',
            'email'=>'admin@rabbani.co.id',
            'email_verified_at'=>now(),
            'password'=>Hash::make('rabbanijaya123'),
            'role'=>'admin',
            'phone_number'=>'081256567878',
            'created_at'=>now(),
        ];

        DB::table('users')->insert( $admin);

        $users = [
            [
                'name'=> 'Fika Nur Aini',
                'username'=>'fikana19',
                'email'=>'fikana19@gmail.com',
                'email_verified_at'=>now(),
                'password'=>Hash::make('fikacantik123'),
                'role'=>'user',
                'phone_number'=>'081234345656',
                'avatar'=>'avatars/2.jpg',
                'resipient_name'=>'Fika Nur Aini',
                'resipient_address'=>'Jl. Kembang Sepatu No. 1',
                'resipient_country'=>'Indonesia',
                'resipient_province'=>'Jawa Barat',
                'resipient_city_id'=>115,
                'resipient_city'=>'Depok',
                'resipient_postal_code'=>'16418',
                'created_at'=>now(),

            ],
            [
                'name'=> 'Muthia Qurrota Akyun',
                'username'=>'ayu.muth',
                'email'=>'ayu.muth@gmail.com',
                'email_verified_at'=>now(),
                'password'=>Hash::make('muthiacantik123'),
                'role'=>'user',
                'phone_number'=>'081234345656',
                'avatar'=>'avatars/3.jpg',
                'resipient_name'=>'Muthia Qurrota Akyun',
                'resipient_address'=>'Jl. Kembang Sepatu No. 1',
                'resipient_country'=>'Indonesia',
                'resipient_province'=>'Jawa Timur',
                'resipient_city_id'=>409,
                'resipient_city'=>'Sidoarjo',
                'resipient_postal_code'=>'61219',
                'created_at'=>now(),

            ],
            [
                'name'=> 'Nisrina Salma Rabbani',
                'username'=>'salma',
                'email'=>'salma@gmail.com',
                'email_verified_at'=>now(),
                'password'=>Hash::make('salmacantik123'),
                'role'=>'user',
                'phone_number'=>'081234345656',
                'avatar'=>'avatars/2.jpg',
                'resipient_name'=>'Nisrina Salma Rabbani',
                'resipient_address'=>'Jl. Kembang Sepatu No. 1',
                'resipient_country'=>'Indonesia',
                'resipient_province'=>'Jawa Timur',
                'resipient_city_id'=>409,
                'resipient_city'=>'Sidoarjo',
                'resipient_postal_code'=>'61219',
                'created_at'=>now(),

            ],
            [
                'name'=> 'Atika Salsabila',
                'username'=>'atika',
                'email'=>'atika@gmail.com',
                'email_verified_at'=>now(),
                'password'=>Hash::make('atikacantik123'),
                'role'=>'user',
                'phone_number'=>'081234345656',
                'avatar'=>'avatars/3.jpg',
                'resipient_name'=>'Atika Salsabila',
                'resipient_address'=>'Jl. Kembang Sepatu No. 1',
                'resipient_country'=>'Indonesia',
                'resipient_province'=>'Jawa Timur',
                'resipient_city_id'=>409,
                'resipient_city'=>'Sidoarjo',
                'resipient_postal_code'=>'61219',
                'created_at'=>now(),

            ]
        ];

        DB::table('users')->insert( $users);

    }
}
