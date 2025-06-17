<?php

namespace Database\Seeders;

    use Illuminate\Database\Seeder;
    use App\Models\Category;

   class CategorySeeder extends Seeder
   {
       public function run()
       {
           Category::create([
               'name' => 'Electronics',
               'slug' => 'electronics',
               'description' => 'Electronic gadgets and devices',
               'icon' => 'fa-tv',
           ]);

           Category::create([
               'name' => 'Automobiles',
               'slug' => 'automobiles',
               'description' => 'Cars and vehicles',
               'icon' => 'fa-car',
           ]);
       }
   }