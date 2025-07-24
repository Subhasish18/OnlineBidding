<?php

namespace App\Http\Controllers;

use App\Models\Bid;
use App\Models\Auction;
use App\Models\Watchlist;
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
                'status' => 'active',
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
            ->with('user') 
            ->orderBy('amount', 'desc')
            ->get();

        return response()->json(['bids' => $bids]);
    }

    public function myBids()
    {
        $user = Auth::user();
        $bids = $user->bids()->with(['auction'])->latest()->get();

        return response()->json(['bids'=> $bids]);
    }

    public function addToWatchList(Request $request)
    {
        $request->validate([
            'auction_id' => 'required|exists:auctions,id',  
            ]);
        
        $user = Auth::user();

        $exists = WatchList::where('user_id',$user->id)
            ->where('auction_id',$request->auction_id)
            ->exists();

        if ($exists){
            return response()->json(['error'=>'Auction already in watchlist'], 400);
        }
        try{
            $watchlistItem = Watchlist::create([
                'user_id'=>$user->id,
                'auction_id'=>$request->auction_id,
            ]);

            return response()->json([
                'message' => 'Auction added to watchlist successfully!',
                'watchlist_Item' => $watchlistItem,
            ],201);
        } catch(\Exception $e){
            return response()->json(['error'=>$e->getMessage()],400);
        }
    }

    public function removeFromWatchlist($auctionId)
    {
        $user = Auth::user();

        $watchlistItem = Watchlist::where('user_id',$user->id)
            ->where('auction_id',$auctionId)
            ->first();

        if (!$watchlistItem) {
            return response()->json(['error'=>'Auction not in watchlist'], 404);
        }

        $watchlistItem->delete();

        return response()->json(['message'=>'Auction removed from watchlist successfully!']);
    }

    public function getWatchlist()
    {
        $user = Auth::user();
        $watchlist = $user->watchlist()->with(['auction'])->get();

        return response()->json(['watchlist'=> $watchlist]);
    }
}