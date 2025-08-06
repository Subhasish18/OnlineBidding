<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuctionController;
use App\Http\Controllers\BidController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ApiDocController;



Route::get('/docs', [ApiDocController::class, 'index']);


Route::post('/register', [UserController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);


Route::get('/auctions', [AuctionController::class, 'index']);
Route::get('/auctions/{id}', [AuctionController::class, 'show']);
Route::get('/auctions/{id}/bids', [BidController::class, 'index']);


Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{slug}', [CategoryController::class, 'show']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    Route::post('/logout', [UserController::class, 'logout']);
    

    Route::get('/profile', [UserController::class, 'profile']);
    Route::put('/profile', [UserController::class, 'updateProfile']);
    Route::put('/profile/password', [UserController::class, 'changePassword']);
    Route::get('/dashboard', [UserController::class, 'dashboard']);
    

    Route::get('/my-auctions', [UserController::class, 'auctions']);
    Route::get('/my-auctions/active', [UserController::class, 'activeAuctions']);
    Route::get('/my-auctions/ended', [UserController::class, 'endedAuctions']);
    

    Route::get('/my-bids', [BidController::class, 'myBids']);
    Route::get('/my-bids/winning', [UserController::class, 'winningBids']);
    Route::get('/my-bids/outbid', [UserController::class, 'outbidBids']);
    

    Route::post('/auctions', [AuctionController::class, 'store']);
    Route::put('/auctions/{id}', [AuctionController::class, 'update']);
    Route::delete('/auctions/{id}', [AuctionController::class, 'destroy']);
    

    Route::post('/bids', [BidController::class, 'store']);

    Route::post('/watchlist', [UserController::class, 'addToWatchlist']);
    Route::delete('/watchlist/{auctionId}', [UserController::class, 'removeFromWatchlist']);
    Route::get('/watchlist', [UserController::class, 'watchlist']);
    
  
    Route::prefix('admin')->group(function () {
        Route::post('/categories', [CategoryController::class, 'store']);
        Route::put('/categories/{id}', [CategoryController::class, 'update']);
        Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);
    });
});

Route::get('/test', function(Request $request) {
    echo "Hello World";
});
