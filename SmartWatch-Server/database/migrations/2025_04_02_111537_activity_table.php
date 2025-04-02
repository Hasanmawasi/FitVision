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
        Schema::create('activity',function(Blueprint $table){
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->integer('steps')->default(0);
            $table->float("distance")->default(0);
            $table->float("calories")->default(0);
            $table->integer("active_minutes")->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activity');
    }
};
