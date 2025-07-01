<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use App\Models\Auction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BidController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'auction_id' => 'required|exists:auctions,id',
            'amount' => 'required|numeric|gt:0',
        ]);

        try {
            $auction = Auction::findOrFail($request->auction_id);
            if ($auction->status !== 'active' || $auction->end_time < now()) {
                return response()->json(['error' => 'Auction is not active.'], 400);
            }

            $bid = Bid::create([
                'user_id' => Auth::id(),
                'auction_id' => $request->auction_id,
                'amount' => $request->amount,
                'bid_time' => now(),
                'status' => 'active', // Updated to 'winning' in model boot
            ]);

            return response()->json([
                'message' => 'Bid placed successfully!',
                'bid' => $bid,
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function index($auctionId)
    {
        $bids = Bid::where('auction_id', $auctionId)
            ->with('user') // Include user details
            ->orderBy('amount', 'desc')
            ->get();

        return response()->json(['bids' => $bids]);
    }
}