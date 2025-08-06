<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::withCount('auctions')->get();
        
        return CategoryResource::collection($categories);
    }

    public function show($slug)
    {
        $category = Category::where('slug', $slug)
            ->withCount('auctions')
            ->firstOrFail();
            
        return new CategoryResource($category);
    }

    public function store(StoreCategoryRequest $request)
    {

        $category = Category::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'description' => $request->description,
            'icon' => $request->icon,
        ]);

        return response()->json([
            'message' => 'Category created successfully!',
            'category' => new CategoryResource($category),
        ], 201);
    }

    public function update(UpdateCategoryRequest $request, $id)
    {
        $category = Category::findOrFail($id);

        $category->update([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'description' => $request->description,
            'icon' => $request->icon,
        ]);

        return response()->json([
            'message' => 'Category updated successfully!',
            'category' => new CategoryResource($category),
        ]);
    }

    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        
        // Check if category has auctions
        if ($category->auctions()->count() > 0) {
            return response()->json([
                'error' => 'Cannot delete category with existing auctions'
            ], 400);
        }
        
        $category->delete();
        
        return response()->json(['message' => 'Category deleted successfully']);
    }
}
