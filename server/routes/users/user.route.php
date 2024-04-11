<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::middleware(['cors'])->group(function () {
    Route::post('user/signup', [UserController::class, 'signup']);
    
    Route::post('user/signin',  [UserController::class, 'signin']);
});