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
                'slug' => 'electronics',
                'description' => 'Electronic gadgets and devices',
                'icon' => 'fa-tv',
            ],
            [
                'name' => 'Collectibles',
                'slug' => 'collectibles',
                'description' => 'Rare and unique collectible items',
                'icon' => 'fa-star',
            ],
        ];

        foreach ($categories as $categoryData) {
            // Check if category exists by slug to avoid duplicates
            if (!Category::where('slug', $categoryData['slug'])->exists()) {
                Category::create($categoryData);
            }
        }
    }
}