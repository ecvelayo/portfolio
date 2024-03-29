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

// Tasks Controller
Route::get('/', 'Controller@helloWorld');
Route::get('/tasks', 'Controller@getTasks');
Route::post('/tasks', 'Controller@postTask');
Route::delete('/tasks', 'Controller@deleteTask');
Route::patch('/tasks', 'Controller@updateTask');

// Time Controller
$route = '/time';
Route::get($route.'/', 'TimeController@timeGetServerTime');
Route::get($route.'/helloWorld', 'TimeController@timeHelloWorld');


