<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('postId');
            $table->integer('authorId');
            $table->integer('categoryId');
            $table->foreign('authorId')->references('userId')->on('users');
            $table->foreign('categoryId')->references('categoryId')->on('categories');
            $table->string('title');
            $table->text('postDes');
            $table->text('content');
            $table->string('postAvatar');
            $table->boolean('isPublic');
            $table->boolean('isActive');
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
        Schema::dropIfExists('posts');
    }
}