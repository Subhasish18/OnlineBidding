<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'icon',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relationships
    public function auctions(): HasMany
    {
        return $this->hasMany(Auction::class);
    }

    public function activeAuctions(): HasMany
    {
        return $this->hasMany(Auction::class)->where('status', 'active');
    }

    // Scopes
    public function scopeWithActiveAuctions(Builder $query): Builder
    {
        return $query->whereHas('auctions', function ($q) {
            $q->where('status', 'active');
        });
    }

    public function scopePopular(Builder $query): Builder
    {
        return $query->withCount('auctions')->orderBy('auctions_count', 'desc');
    }

    // Mutators
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    // Accessors
    public function getActiveAuctionsCountAttribute()
    {
        return $this->activeAuctions()->count();
    }

    // Helper methods
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function hasAuctions(): bool
    {
        return $this->auctions()->count() > 0;
    }

    public function getUrlAttribute(): string
    {
        return "/categories/{$this->slug}";
    }
}
