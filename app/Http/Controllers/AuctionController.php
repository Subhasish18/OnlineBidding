<?php

namespace App\Http\Controllers;

use App\Models\Auction;
use App\Models\Bid;
use App\Models\Watchlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class AuctionController extends Controller
{
    
    private function formatAuction($auction)
    {
        $isWatched = Auth::check()
            ? Watchlist::where('user_id', Auth::id())
                ->where('auction_id', $auction->id)
                ->exists()
            : false;

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
            'user' => $auction->user ? ['id' => $auction->user->id, 'name' => $auction->user->name] : null,
            'category' => $auction->category ? ['id' => $auction->category->id, 'name' => $auction->category->name] : null,
            'bid_count' => $auction->bids->count(),
            'is_watched' => $isWatched,
            'time_remaining' => $auction->timeRemaining(),
            'is_active' => $auction->isActive(),
        ];
    }

    public function index(Request $request)
    {
        $query = Auction::with(['user', 'category', 'bids']);

    
        if ($request->has('status')) {
            if ($request->status === 'active') {
                $query->active();
            } elseif ($request->status === 'ended') {
                $query->ended();
            }
        }

        if ($request->has('category_id')) {
            $query->where('category_id', $request->category_id);
        }

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        $auctions = $query->get()->map(function ($auction) {
            return $this->formatAuction($auction);
        });

        return response()->json(['auctions' => $auctions]);
    }

   
    public function show($id)
    {
        $auction = Auction::with(['user', 'category', 'bids'])
            ->findOrFail($id);

        return response()->json(['auction' => $this->formatAuction($auction)]);
    }

   
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'starting_price' => 'required|numeric|min:0',
            'reserve_price' => 'nullable|numeric|min:0',
            'start_time' => 'required|date|after_or_equal:now',
            'end_time' => 'required|date|after:start_time',
            'category_id' => 'nullable|exists:categories,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $data = $request->only([
            'title',
            'description',
            'starting_price',
            'reserve_price',
            'start_time',
            'end_time',
            'category_id',
        ]);

        $data['user_id'] = Auth::id();
        $data['current_price'] = $data['starting_price'];
        $data['status'] = 'active';

        if ($request->hasFile('image')) {
            $data['image_path'] = $request->file('image')->store('auctions', 'public');
        }

        try {
            $auction = Auction::create($data);
            return response()->json([
                'message' => 'Auction created successfully!',
                'auction' => $this->formatAuction($auction),
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function update(Request $request, $id)
    {
        $auction = Auction::findOrFail($id);

        if ($auction->user_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        if ($auction->hasEnded()) {
            return response()->json(['error' => 'Cannot update an ended auction'], 400);
        }

        $request->validate([
            'title' => 'string|max:255',
            'description' => 'string',
            'starting_price' => 'numeric|min:0',
            'reserve_price' => 'nullable|numeric|min:0',
            'start_time' => 'date|after_or_equal:now',
            'end_time' => 'date|after:start_time',
            'category_id' => 'nullable|exists:categories,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $data = $request->only([
            'title',
            'description',
            'starting_price',
            'reserve_price',
            'start_time',
            'end_time',
            'category_id',
        ]);

      
        if ($request->hasFile('image')) {
           
            if ($auction->image_path) {
                Storage::disk('public')->delete($auction->image_path);
            }
            $data['image_path'] = $request->file('image')->store('auctions', 'public');
        }

        try {
            $auction->update($data);
            return response()->json([
                'message' => 'Auction updated successfully!',
                'auction' => $this->formatAuction($auction->fresh()),
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        $auction = Auction::findOrFail($id);

        if ($auction->user_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

       
        if ($auction->isActive() && $auction->bids()->count() > 0) {
            return response()->json(['error' => 'Cannot delete an active auction with bids'], 400);
        }

     
        if ($auction->image_path) {
            Storage::disk('public')->delete($auction->image_path);
        }

        $auction->delete();

        return response()->json(['message' => 'Auction deleted successfully']);
    }
}