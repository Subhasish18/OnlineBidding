<?php

require_once 'vendor/autoload.php';

$app = require_once 'bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use App\Models\Auction;

$auction = Auction::first();

if ($auction) {
    echo "Auction: " . $auction->title . "\n";
    echo "Seller: " . $auction->user->name . "\n";
    echo "Category: " . $auction->category->name . "\n";
    echo "Status: " . $auction->status . "\n";
    echo "Price: $" . $auction->current_price . "\n";
    echo "Ends: " . $auction->end_time . "\n";
} else {
    echo "No auctions found.\n";
}

