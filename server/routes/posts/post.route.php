<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PostController;

Route::middleware(['cors'])->group(function () {
    Route::get('post/list', [PostController::class, 'getPostList']);
});