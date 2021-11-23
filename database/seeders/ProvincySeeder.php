<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Providers\RajaOngkir;

class ProvincySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $init = new RajaOngkir('yourApiKey', true);
        $provincies $init->getProvince();
    }
}
