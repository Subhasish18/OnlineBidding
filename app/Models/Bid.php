<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bid extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'auction_id',
        'amount',
        'bid_time',
        'status',
    ];

    protected $casts = [
        'bid_time' => 'datetime',
        'status' => 'string',
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

        static::creating(function ($bid) {
            if (app()->runningInConsole()) {
                return; // Skip validation during seeding
            }
            if ($bid->amount <= 0) {
                throw new \Exception('Bid amount must be greater than zero.');
            }
            $highestBid = Bid::where('auction_id', $bid->auction_id)
                ->where('status', '!=', 'outbid')
                ->orderBy('amount', 'desc')
                ->first();
            if ($highestBid && $bid->amount <= $highestBid->amount) {
                throw new \Exception('Bid amount must be higher than the current highest bid.');
            }
        });

        static::created(function ($bid) {
            if (app()->runningInConsole()) {
                return; // Skip status updates during seeding
            }
            Bid::where('auction_id', $bid->auction_id)
                ->where('id', '!=', $bid->id)
                ->where('status', '!=', 'outbid')
                ->update(['status' => 'outbid']);
            $bid->status = 'winning';
            $bid->save();
        });
    }
}