<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuctionController;
use App\Http\Controllers\BidController;


Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::get('/auctions', [AuctionController::class, 'index']);
Route::get('/auctions/{id}', [AuctionController::class, 'show']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::post('/logout', [UserController::class, 'logout']);
    

    Route::post('/auctions', [AuctionController::class, 'store']);
    Route::put('/auctions/{id}', [AuctionController::class, 'update']);
    Route::delete('/auctions/{id}', [AuctionController::class, 'destroy']);
    
  
    Route::post('/bids', [BidController::class, 'store']);
    Route::get('/my-bids', [BidController::class, 'myBids']);
    
  
    Route::post('/watchlist', [BidController::class, 'addToWatchlist']);
    Route::delete('/watchlist/{id}', [BidController::class, 'removeFromWatchlist']);
    Route::get('/watchlist', [BidController::class, 'getWatchlist']);
});

Route::get('/test', function(Request $request) {
    echo "Hello World";
});
