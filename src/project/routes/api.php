<?php

// ユーザ
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\UserController;

// フォロー
use App\Http\Controllers\FollowController;

// 質問
use App\Http\Controllers\QuestionController;

// いいね
use App\Http\Controllers\Like\QuestionController as LikeQuestionController;

// 検索
use App\Http\Controllers\SearchController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/


/**
 *  ユーザ
*/
Route::prefix('user')->group(function () {
    Route::get('index', [UserController::class,'index']); // ユーザログイン情報
    Route::get('show/{id}',[UserController::class, 'show']); // ユーザプロフィール情報
    Route::post('edit',[UserController::class, 'edit']); // ユーザプロフィール情報
    Route::post('store', [RegisterController::class,'store']); // ユーザ新規登録
    Route::post('login',[LoginController::class, 'login']); // ユーザログイン
});

/**
 * フォロー
 */
Route::prefix('follow')->group(function () {
    Route::get('/show/{id}', [FollowController::class,'show']); // フォロー判定
    Route::post('/store', [FollowController::class,'store']); // フォローする
});

/**
 *  質問
 */
Route::prefix('question')->group(function () {
    Route::get('/', [QuestionController::class,'index']); // 質問おすすめ一覧
    Route::get('/latest', [QuestionController::class,'latest']); // 質問最新順一覧
    Route::get('/like', [QuestionController::class,'like']); // 質問いいね一覧
    Route::get('/{id}', [QuestionController::class,'show']); // 質問詳細
    Route::post('/store', [QuestionController::class,'store']); // 質問保存
});

/**
 *  いいね
 */
Route::prefix('like')->group(function () {
    Route::get('index/{id}', [LikeQuestionController::class,'index']); // 質問いいね判定
    Route::post('store', [LikeQuestionController::class,'store']); // いいね保存
    Route::post('destroy', [LikeQuestionController::class,'destroy']); // いいね削除
});

/**
 *  検索
 */
Route::prefix('search')->group(function () {
    Route::get('{keyword}', [SearchController::class,'question']); // 質問検索
    Route::get('user/{keyword}', [SearchController::class,'user']); // ユーザ検索
});
