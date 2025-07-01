<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Watchlist extends Model
{
    use HasFactory;

   
    protected $fillable = [
        'user_id',
        'auction_id',
    ];

   
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function auction()
    {
        return $this->belongsTo(Auction::class);
    }

 
    public static function boot()
    {
        parent::boot();

        static::creating(function ($watchlist) {
   
            if (app()->runningInConsole()) {
                return;
            }

            if (Watchlist::where('user_id', $watchlist->user_id)
                ->where('auction_id', $watchlist->auction_id)
                ->exists()) {
                throw new \Exception('This auction is already in the user\'s watchlist.');
            }
        });
    }
}