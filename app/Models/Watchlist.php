<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Watchlist extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'user_id',
        'auction_id',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the user that owns the watchlist entry.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the auction associated with the watchlist entry.
     */
    public function auction()
    {
        return $this->belongsTo(Auction::class);
    }

    /**
     * Boot the model.
     */
    public static function boot()
    {
        parent::boot();

        static::creating(function ($watchlist) {
            // Skip validation during seeding
            if (app()->runningInConsole()) {
                return;
            }

            // Prevent duplicate watchlist entries
            if (Watchlist::where('user_id', $watchlist->user_id)
                ->where('auction_id', $watchlist->auction_id)
                ->exists()) {
                throw new \Exception('This auction is already in the user\'s watchlist.');
            }
        });
    }
}