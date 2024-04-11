<?php

use Illuminate\Support\Facades\Route;

require __DIR__ . '/users/user.route.php';
require __DIR__ . '/posts/post.route.php';

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return view('welcome');
});