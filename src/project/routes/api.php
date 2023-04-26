<?php

use App\Http\Controllers\Auth\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

/**
 *  ユーザ関連
*/
Route::prefix('user')->group(function () {
    Route::post('store', [RegisterController::class,'store']); // アカウント新規登録
});
