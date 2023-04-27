<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

/**
 *  ユーザ関連
*/
Route::prefix('user')->group(function () {
    Route::get('index', [UserController::class,'index']); // アカウントログイン情報
    Route::post('store', [RegisterController::class,'store']); // アカウント新規登録
});
