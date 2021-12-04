<?php

namespace Database\Seeders;

use App\Models\Transaction;
use Illuminate\Database\Seeder;
use Database\Seeders\TransactionSeeder;
use Database\Seeders\TransactionDetailSeeder;
use Database\Seeders\ReviewSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(UserSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(ProvinceSeeder::class);
        $this->call(CitySeeder::class);
        $this->call(TransactionSeeder::class);
        $this->call(TransactionDetailSeeder::class);
        $this->call(ReviewSeeder::class);

    }
}
