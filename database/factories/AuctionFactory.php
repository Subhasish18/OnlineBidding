<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Auction;
use App\Models\User;
use App\Models\Category;

class AuctionFactory extends Factory
{
    protected $model = Auction::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(),
            'starting_price' => $this->faker->randomFloat(2, 100, 1000),
            'current_price' => $this->faker->randomFloat(2, 100, 1000),
            'start_time' => $this->faker->dateTimeBetween('-1 week', 'now'),
            'end_time' => $this->faker->dateTimeBetween('now', '+1 week'),
            'user_id' => User::factory(),
            'category_id' => null, // Adjust if Category model is required
        ];
    }
}