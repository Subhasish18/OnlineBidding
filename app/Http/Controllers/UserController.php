<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Auction;
use App\Models\Bid;
use App\Models\Watchlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],
            'token' => $token,
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ],
            'token' => $token,
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
   
    public function profile(Request $request)
    {
        $user = Auth::user();

        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at,
                'auctions_count' => $user->auctions()->count(),
                'bids_count' => $user->bids()->count(),
                'watchlist_count' => $user->watchlist()->count(),
            ],
        ]);
    }


    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|string|email|max:255|unique:users,email,' . $user->id,
        ]);

        try {
            $user->update($request->only(['name', 'email']));
            
            return response()->json([
                'message' => 'Profile updated successfully!',
                'user' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                ],
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }


    public function changePassword(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'current_password' => 'required|string',
            'password' => 'required|string|min:8|confirmed',
        ]);

    
        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json(['error' => 'Current password is incorrect'], 400);
        }

        try {
            $user->update([
                'password' => Hash::make($request->password)
            ]);

            return response()->json([
                'message' => 'Password changed successfully!'
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

 
    public function auctions(Request $request)
    {
        $user = Auth::user();
        $auctions = $user->auctions()->with(['category', 'bids'])->get()->map(function ($auction) {
            return [
                'id' => $auction->id,
                'title' => $auction->title,
                'description' => $auction->description,
                'starting_price' => $auction->starting_price,
                'current_price' => $auction->current_price,
                'reserve_price' => $auction->reserve_price,
                'start_time' => $auction->start_time,
                'end_time' => $auction->end_time,
                'status' => $auction->status,
                'image_path' => $auction->image_path ? Storage::url($auction->image_path) : null,
                'category' => $auction->category ? [
                    'id' => $auction->category->id,
                    'name' => $auction->category->name,
                    'slug' => $auction->category->slug,
                ] : null,
                'bid_count' => $auction->bids->count(),
                'time_remaining' => $auction->timeRemaining(),
                'is_active' => $auction->isActive(),
            ];
        });

        return response()->json(['auctions' => $auctions]);
    }

    public function bids(Request $request)
    {
        $user = Auth::user();
        $bids = $user->bids()->with(['auction'])->get()->map(function ($bid) {
            return [
                'id' => $bid->id,
                'auction_id' => $bid->auction_id,
                'amount' => $bid->amount,
                'bid_time' => $bid->bid_time,
                'status' => $bid->status,
                'auction' => $bid->auction ? [
                    'id' => $bid->auction->id,
                    'title' => $bid->auction->title,
                ] : null,
            ];
        });

        return response()->json(['bids' => $bids]);
    }

 
    public function watchlist(Request $request)
    {
        $user = Auth::user();
        $watchlist = $user->watchlist()->with(['auction'])->get()->map(function ($watchlistItem) {
            return [
                'id' => $watchlistItem->id,
                'auction_id' => $watchlistItem->auction_id,
                'created_at' => $watchlistItem->created_at,
                'auction' => $watchlistItem->auction ? [
                    'id' => $watchlistItem->auction->id,
                    'title' => $watchlistItem->auction->title,
                    'current_price' => $watchlistItem->auction->current_price,
                    'end_time' => $watchlistItem->auction->end_time,
                    'status' => $watchlistItem->auction->status,
                    'time_remaining' => $watchlistItem->auction->timeRemaining(),
                    'is_active' => $watchlistItem->auction->isActive(),
                ] : null,
            ];
        });

        return response()->json(['watchlist' => $watchlist]);
    }

    public function activeAuctions()
    {
        $user = Auth::user();
        $auctions = $user->auctions()->active()->with(['category', 'bids'])->get();
        
        return response()->json(['auctions' => $auctions]);
    }

    public function endedAuctions()
    {
        $user = Auth::user();
        $auctions = $user->auctions()->ended()->with(['category', 'bids'])->get();
        
        return response()->json(['auctions' => $auctions]);
    }

  
    public function winningBids()
    {
        $user = Auth::user();
        $winningBids = $user->bids()->where('status', 'winning')->with(['auction'])->get();
        
        return response()->json(['bids' => $winningBids]);
    }


    public function outbidBids()
    {
        $user = Auth::user();
        $outbidBids = $user->bids()->where('status', 'outbid')->with(['auction'])->get();
        
        return response()->json(['bids' => $outbidBids]);
    }

 
    public function dashboard()
    {
        $user = Auth::user();
        
        $stats = [
            'total_auctions' => $user->auctions()->count(),
            'active_auctions' => $user->auctions()->active()->count(),
            'ended_auctions' => $user->auctions()->ended()->count(),
            'total_bids' => $user->bids()->count(),
            'winning_bids' => $user->bids()->where('status', 'winning')->count(),
            'watchlist_items' => $user->watchlist()->count(),
        ];
        
      
        $recentBids = $user->bids()->with('auction')->latest()->take(5)->get();
        $recentAuctions = $user->auctions()->with('category')->latest()->take(5)->get();
        
        return response()->json([
            'stats' => $stats,
            'recent_bids' => $recentBids,
            'recent_auctions' => $recentAuctions,
        ]);
    }

    public function addToWatchlist(Request $request)
    {
        $request->validate([
            'auction_id' => 'required|exists:auctions,id',
        ]);

        $user = Auth::user();
        
        try {
            $watchlistItem = Watchlist::create([
                'user_id' => $user->id,
                'auction_id' => $request->auction_id,
            ]);

            return response()->json([
                'message' => 'Auction added to watchlist successfully!',
                'watchlist_item' => $watchlistItem,
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function removeFromWatchlist($auctionId)
    {
        $user = Auth::user();
        
        $watchlistItem = Watchlist::where('user_id', $user->id)
            ->where('auction_id', $auctionId)
            ->first();

        if (!$watchlistItem) {
            return response()->json(['error' => 'Auction not found in watchlist'], 404);
        }

        $watchlistItem->delete();

        return response()->json(['message' => 'Auction removed from watchlist successfully']);
    }
}
