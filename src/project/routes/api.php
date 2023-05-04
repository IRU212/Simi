<?php

// ユーザ
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\UserController;

// フォロー
use App\Http\Controllers\FollowController;

// 質問
use App\Http\Controllers\Question\QuestionController;
use App\Http\Controllers\Question\SubjectController;
use App\Http\Controllers\Question\CourseController;

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
    Route::post('logout',[LogoutController::class, 'logout']); // ユーザログアウト
    Route::get('logout',[LogoutController::class, 'logout']); // ユーザログアウト
});

/**
 * フォロー
 */
Route::prefix('follow')->group(function () {
    Route::get('/show/{id}', [FollowController::class,'show']); // フォロー判定
    Route::post('/store', [FollowController::class,'store']); // フォローする
    Route::post('/destroy', [FollowController::class,'destroy']); // フォロー解除
});

/**
 *  質問
 */
Route::prefix('question')->group(function () {
    Route::get('/', [QuestionController::class,'index']); // 質問おすすめ一覧
    Route::get('/latest', [QuestionController::class,'latest']); // 質問最新順一覧
    Route::get('/like', [QuestionController::class,'like']); // 質問いいね一覧
    Route::get('/follow', [QuestionController::class,'follow']); // フォローユーザ質問一覧
    Route::get('/{id}', [QuestionController::class,'show']); // 質問詳細
    Route::post('/store', [QuestionController::class,'store']); // 質問保存

    // 教科絞り込み
    Route::prefix('subject')->group(function () {
        Route::get('{id}', [SubjectController::class,'index']); // 質問おすすめ一覧
        Route::get('/latest/{id}', [SubjectController::class,'latest']); // 質問最新順一覧
        Route::get('/like/{id}', [SubjectController::class,'like']); // 質問いいね一覧
        Route::get('/follow/{id}', [SubjectController::class,'follow']); // フォローユーザ質問一覧
    });

    // 科目絞り込み
    Route::prefix('course')->group(function () {
        Route::get('{id}', [CourseController::class,'index']); // 質問おすすめ一覧
        Route::get('/latest/{id}', [CourseController::class,'latest']); // 質問最新順一覧
        Route::get('/like/{id}', [CourseController::class,'like']); // 質問いいね一覧
        Route::get('/follow/{id}', [CourseController::class,'follow']); // フォローユーザ質問一覧
    });
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
