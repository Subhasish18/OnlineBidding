<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Bid;
use App\Models\User;
use App\Models\Auction;

class BidSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::first();
        if (!$user) {
            $user = User::create([
                'name' => 'Test User',
                'email' => 'testuser@example.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ]);
        }

        $auction = Auction::first();
        if (!$auction) {
            $auction = Auction::create([
                'title' => 'Test Auction',
                'description' => 'A sample auction for testing bids',
                'starting_price' => 500,
                'current_price' => 500,
                'start_time' => now()->subHour(),
                'end_time' => now()->addDays(3),
                'user_id' => $user->id,
                'category_id' => null,
            ]);
        }

        $bids = [
            [
                'user_id' => $user->id,
                'auction_id' => $auction->id,
                'amount' => 550.00,
                'bid_time' => now()->subMinutes(30),
                'status' => 'outbid',
            ],
            [
                'user_id' => $user->id,
                'auction_id' => $auction->id,
                'amount' => 600.00,
                'bid_time' => now()->subMinutes(15),
                'status' => 'outbid',
            ],
            [
                'user_id' => $user->id,
                'auction_id' => $auction->id,
                'amount' => 650.00,
                'bid_time' => now(),
                'status' => 'winning',
            ],
        ];

        foreach ($bids as $bidData) {
            Bid::create($bidData);
        }
    }
}