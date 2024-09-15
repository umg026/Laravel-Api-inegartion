<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('signup', [AuthController::class, 'signup']);

Route::post('login', [AuthController::class, 'login']);


// Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Using Middleware group 
Route::middleware('auth:sanctum')->group(function () {
    
    Route::post('logout', [AuthController::class, 'logout']);

    Route::get('posts', [PostController::class, 'index']);  // Use POST for creating a new post

    // Create a post
    Route::post('create-post', [PostController::class, 'store']);  // Use POST for creating a new post
    Route::get('getone-post/{id}', [PostController::class, 'show']);  // Use POST for creating a new post

    // Update a post
    Route::post('update-post/{id}', [PostController::class, 'update']);  // Use PUT for updating a post

    // Delete a post
    Route::delete('delete-post/{id}', [PostController::class, 'destroy']);  // Use DELETE for deleting a post

});
