<?php

// ユーザ関連
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\UserController;

// 質問関連
use App\Http\Controllers\QuestionController;

// いいね関連
use App\Http\Controllers\Like\QuestionController as LikeQuestionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/


/**
 *  ユーザ関連
*/
Route::prefix('user')->group(function () {
    Route::get('index', [UserController::class,'index']); // ユーザログイン情報
    Route::get('show/{id}',[UserController::class, 'show']); // ユーザプロフィール情報
    Route::post('edit',[UserController::class, 'edit']); // ユーザプロフィール情報
    Route::post('store', [RegisterController::class,'store']); // ユーザ新規登録
    Route::post('login',[LoginController::class, 'login']); // ユーザログイン
});

/**
 *  質問関連
 */
Route::prefix('question')->group(function () {
    Route::get('index', [QuestionController::class,'index']); // 質問おすすめ一覧
    Route::get('latest', [QuestionController::class,'latest']); // 質問最新順一覧
    Route::get('like', [QuestionController::class,'like']); // 質問いいね一覧
    Route::post('store', [QuestionController::class,'store']); // 質問保存
});

/**
 *  いいね関連
 */
Route::prefix('like')->group(function () {
    Route::get('index/{id}', [LikeQuestionController::class,'index']); // 質問いいね判定
    Route::post('store', [LikeQuestionController::class,'store']); // いいね保存
    Route::post('destroy', [LikeQuestionController::class,'destroy']); // いいね削除
});
