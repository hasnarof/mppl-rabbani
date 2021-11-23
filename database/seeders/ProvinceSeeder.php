<?php

namespace Database\Seeders;

use App\Models\Province;
use App\Providers\RajaOngkir;
use Illuminate\Database\Seeder;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $init = new RajaOngkir(true);
        $provinces = $init->getProvince();
        $provinces = json_decode($provinces);
        foreach ($provinces as $key => $province) {
            Province::create([
                'id'=>$province->province_id,
                'name'=>$province->province,
            ]);
        }
    }
}
