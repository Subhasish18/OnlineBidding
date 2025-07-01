<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Auction extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'starting_price',
        'current_price',
        'reserve_price',
        'start_time',
        'end_time',
        'status',
        'image_path',
        'user_id',
        'category_id',
    ];

    protected $casts = [
        'starting_price' => 'decimal:2',
        'current_price' => 'decimal:2',
        'reserve_price' => 'decimal:2',
        'start_time' => 'datetime',
        'end_time' => 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function bids(): HasMany
    {
        return $this->hasMany(Bid::class);
    }

    public function scopeActive($query)
    {
        return $query->where('status', 'active')
                    ->where('start_time', '<=', now())
                    ->where('end_time', '>', now());
    }

    public function scopeEnded($query)
    {
        return $query->where('status', 'ended')
                    ->orWhere('end_time', '<=', now());
    }

 
    public function isActive(): bool
    {
        return $this->status === 'active' 
               && $this->start_time <= now() 
               && $this->end_time > now();
    }

    public function hasEnded(): bool
    {
        return $this->end_time <= now();
    }

    public function timeRemaining(): string
    {
        if ($this->hasEnded()) {
            return 'Auction ended';
        }
        
        return $this->end_time->diffForHumans();
    }
}