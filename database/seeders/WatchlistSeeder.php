<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Watchlist;
use App\Models\User;
use App\Models\Auction;
use App\Models\Category;

class WatchlistSeeder extends Seeder
{
    public function run(): void
    {
        // Ensure a category exists
        $category = Category::where('slug', 'electronics')->first();
        if (!$category) {
            $category = Category::create([
                'name' => 'Electronics',
                'slug' => 'electronics',
                'description' => 'Electronic gadgets and devices',
                'icon' => 'fa-tv',
            ]);
        }

        // Ensure a user exists
        $user = User::first();
        if (!$user) {
            $user = User::create([
                'name' => 'Test User',
                'email' => 'testuser@example.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ]);
        }

        // Ensure a second user exists
        $user2 = User::where('email', 'user2@example.com')->first();
        if (!$user2) {
            $user2 = User::create([
                'name' => 'Another User',
                'email' => 'user2@example.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ]);
        }

        // Ensure auctions exist
        $auction = Auction::first();
        if (!$auction) {
            $auction = Auction::create([
                'title' => 'Test Auction',
                'description' => 'A sample auction for testing watchlists',
                'starting_price' => 500,
                'current_price' => 500,
                'start_time' => now()->subHour(),
                'end_time' => now()->addDays(3),
                'status' => 'active',
                'user_id' => $user->id,
                'category_id' => $category->id,
            ]);
        }

        $auction2 = Auction::where('title', 'Second Test Auction')->first();
        if (!$auction2) {
            $auction2 = Auction::create([
                'title' => 'Second Test Auction',
                'description' => 'Another auction for testing watchlists',
                'starting_price' => 700,
                'current_price' => 700,
                'start_time' => now()->subHour(),
                'end_time' => now()->addDays(5),
                'status' => 'active',
                'user_id' => $user->id,
                'category_id' => $category->id,
            ]);
        }

        // Create watchlist entries
        $watchlists = [
            [
                'user_id' => $user->id,
                'auction_id' => $auction->id,
            ],
            [
                'user_id' => $user->id,
                'auction_id' => $auction2->id,
            ],
            [
                'user_id' => $user2->id,
                'auction_id' => $auction->id,
            ],
        ];

        foreach ($watchlists as $watchlistData) {
            Watchlist::create($watchlistData);
        }
    }
}