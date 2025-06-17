<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'icon',
    ];

    // Relationships
    public function auctions(): HasMany
    {
        return $this->hasMany(Auction::class);
    }

    // Helper methods
    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}