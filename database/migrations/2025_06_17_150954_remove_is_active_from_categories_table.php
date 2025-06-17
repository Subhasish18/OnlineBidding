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
    Schema::table('categories', function (Blueprint $table) {
        $table->dropIndex(['is_active']); // Remove the index first
        $table->dropColumn('is_active');
    });
}

public function down(): void
{
    Schema::table('categories', function (Blueprint $table) {
        $table->boolean('is_active')->default(true);
        $table->index('is_active');
    });
}
};
