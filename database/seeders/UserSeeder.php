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
                'name'=> 'Fairuz Hasna Rofifah',
                'username'=>'hasnarof',
                'email'=>'hasnarof@gmail.com',
                'email_verified_at'=>now(),
                'password'=>Hash::make('hasnacantik123'),
                'role'=>'user',
                'phone_number'=>'081234345656',
                'resipient_address'=>'Jl. Kembang Sepatu No. 1',
                'resipient_country'=>'Indonesia',
                'resipient_province'=>'Jawa Barat',
                'resipient_postal_code'=>'16418',
                'created_at'=>now(),

            ]
        ];

        DB::table('users')->insert( $users);

    }
}
