<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{

    /**
     * The model that corresponds to this factory
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name'          => $this->faker->unique()->sentence(3),
            'description'   => $this->faker->unique()->sentence(20),
            'image'   => $this->faker->imageUrl(640, 480),
            'quantity'         => $this->faker->randomNumber(2),
            'price'         => $this->faker->randomFloat(2, 10, 9999)
        ];
    }
}
