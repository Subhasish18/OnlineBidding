<?php

namespace Database\Factories;

use App\Models\Auction;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bid>
 */
class BidFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'auction_id' => Auction::factory(),
            'amount' => $this->faker->randomFloat(2, 10, 1000),
            'bid_time' => $this->faker->dateTimeThisMonth(),
            'status' => $this->faker->randomElement(['active', 'outbid', 'winning']),
        ];
    }
}