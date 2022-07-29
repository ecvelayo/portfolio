<?php

use Illuminate\Support\Facades\Route;

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
    return response()->json(['title' => 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'], 200);
});


Route::get('/time', function () {
    $time = Carbon\Carbon::now();
    return response()->json(['time' => $time ]);
});