<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('auctions', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('description');
        $table->decimal('starting_price', 10, 2);
        $table->decimal('current_price', 10, 2);
        $table->decimal('reserve_price', 10, 2)->nullable();
        $table->timestamp('start_time')->nullable();
        $table->timestamp('end_time')->nullable();
        $table->enum('status', ['draft', 'active', 'ended', 'cancelled'])->default('draft');
        $table->string('image_path')->nullable();
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->foreignId('category_id')->nullable()->constrained()->onDelete('set null');
        $table->timestamps();
        
        $table->index(['status', 'end_time']);
        $table->index('user_id');
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auctions');
    }
};
