<?php

namespace Database\Seeders;

   use Illuminate\Database\Seeder;
   use App\Models\Auction;
   use App\Models\User;
   use App\Models\Category;

   class AuctionSeeder extends Seeder
   {
       public function run()
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
           
           $category = Category::first();

           Auction::create([
               'title' => 'Apple iPhone',
               'description' => 'Latest model with advanced features',
               'starting_price' => 699,
               'current_price' => 699,
               'start_time' => now()->addHours(1),
               'end_time' => now()->addDays(3),
               'user_id' => $user->id,
               'category_id' => $category->id,
           ]);
       }
   }