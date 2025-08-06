<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Electronics',
                'description' => 'Electronic devices, gadgets, computers, and accessories',
                'icon' => 'fa-laptop'
            ],
            [
                'name' => 'Fashion & Clothing',
                'description' => 'Apparel, shoes, accessories, and fashion items',
                'icon' => 'fa-tshirt'
            ],
            [
                'name' => 'Home & Garden',
                'description' => 'Furniture, home decor, gardening tools, and household items',
                'icon' => 'fa-home'
            ],
            [
                'name' => 'Sports & Recreation',
                'description' => 'Sports equipment, outdoor gear, and recreational items',
                'icon' => 'fa-futbol'
            ],
            [
                'name' => 'Art & Collectibles',
                'description' => 'Artwork, collectible items, vintage pieces, and memorabilia',
                'icon' => 'fa-palette'
            ],
            [
                'name' => 'Automotive',
                'description' => 'Vehicles, car parts, automotive tools, and accessories',
                'icon' => 'fa-car'
            ],
            [
                'name' => 'Jewelry & Watches',
                'description' => 'Fine jewelry, watches, precious stones, and luxury accessories',
                'icon' => 'fa-gem'
            ],
            [
                'name' => 'Books & Media',
                'description' => 'Books, movies, music, games, and educational materials',
                'icon' => 'fa-book'
            ],
        ];

        foreach ($categories as $category) {
            $slug = Str::slug($category['name']);
            
            // Check if category exists by slug to avoid duplicates
            if (!Category::where('slug', $slug)->exists()) {
                Category::create([
                    'name' => $category['name'],
                    'slug' => $slug,
                    'description' => $category['description'],
                    'icon' => $category['icon'],
                ]);
            }
        }
    }
}