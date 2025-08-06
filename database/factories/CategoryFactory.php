<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = $this->faker->unique()->randomElement([
            'Electronics',
            'Fashion & Clothing',
            'Home & Garden',
            'Sports & Recreation',
            'Books & Media',
            'Toys & Games',
            'Automotive',
            'Art & Collectibles',
            'Jewelry & Watches',
            'Musical Instruments',
            'Health & Beauty',
            'Tools & Hardware',
            'Antiques',
            'Photography',
            'Business & Industrial'
        ]);

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => $this->faker->paragraph(2),
            'icon' => $this->faker->randomElement([
                'fa-laptop',
                'fa-tshirt',
                'fa-home',
                'fa-futbol',
                'fa-book',
                'fa-gamepad',
                'fa-car',
                'fa-palette',
                'fa-gem',
                'fa-music',
                'fa-heart',
                'fa-tools',
                'fa-crown',
                'fa-camera',
                'fa-briefcase'
            ]),
        ];
    }
}
