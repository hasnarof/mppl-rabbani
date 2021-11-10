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
            'password'=>Hash::make('rabbanijaya123'),
            'role'=>'admin',
            'no_hp'=>'081256567878',
            'address'=>'Jl. Kembang Raya No. 1',
            'country'=>'Indonesia',
            'province'=>'Jawa Timur',
            'postal_code'=>'16418',
        ];

        DB::table('users')->insert( $admin);

        $users = [
            [
                'name'=> 'Fairuz Hasna Rofifah',
                'username'=>'hasnarof',
                'email'=>'hasnarof@gmail.com',
                'password'=>Hash::make('hasnacantik123'),
                'role'=>'user',
                'no_hp'=>'081234345656',
                'address'=>'Jl. Kembang Sepatu No. 1',
                'country'=>'Indonesia',
                'province'=>'Jawa Barat',
                'postal_code'=>'16418',
            ]
        ];

        DB::table('users')->insert( $users);

    }
}
