<?php

namespace Database\Seeders;

use App\Models\City;
use App\Providers\RajaOngkir;
use Illuminate\Database\Seeder;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $init = new RajaOngkir(true);
        $cities = $init->getCity();
        $cities = json_decode($cities);
        foreach ($cities as $key => $city) {
            City::create([
                'id'=>$city->city_id,
                'province_id'=>$city->province_id,
                'province'=>$city->province,
                'type'=>$city->type,
                'name'=>$city->city_name,
                'postal_code'=>$city->postal_code,
            ]);
        }
    }
}
