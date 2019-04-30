<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttachmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attachments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('partner_id')->default(0);
            $table->integer('band_id')->default(0);
            $table->integer('craft_id')->default(0);
            $table->integer('food_id')->default(0);
            $table->integer('game_id')->default(0);
            $table->string('partner_attachment')->default('');
            $table->string('band_attachment')->default('');
            $table->string('craft_attachment')->default('');
            $table->string('food_attachment')->default('');
            $table->string('game_attachment')->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attachments');
    }
}
