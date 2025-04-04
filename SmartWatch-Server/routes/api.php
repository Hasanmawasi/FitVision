<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::group(["prefix"=>"v0.1"], function(){

    Route::post('/register',[AuthController::class, "register"]);
    Route::post('/login',[AuthController::class, "login"]);

    Route::group(["middleware" => "auth:api"], function(){
        Route::get("/getuser",[UserController::class,"getUsers"]);
        Route::get('/validatetoken',[AuthController::class,"validateToken"]);
    });

});
