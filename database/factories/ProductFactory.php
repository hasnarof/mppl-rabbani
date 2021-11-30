<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nama' => $this->faker->word,
            'detail' => $this->faker->sentence($nbWords = 6, $variableNbWords = true),
            'kategori_pakaian' => $this->faker->randomElement(['Atasan', 'Bawahan', 'Dress', 'Kerudung', 'Mukena']),
            'kategori_gender' => $this->faker->randomElement(['Women', 'Men', 'Universal']),
            'is_best_seller' => $this->faker->boolean,
        ];
    }
}
