<?php

// ユーザ
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\ProfileController;

// ダッシュボード
use App\Http\Controllers\DashbordController;

// フォロー
use App\Http\Controllers\FollowController;

// 質問
use App\Http\Controllers\Question\QuestionController;
use App\Http\Controllers\Question\SubjectController;
use App\Http\Controllers\Question\CourseController;
use App\Http\Controllers\Question\ReplyController;

// いいね
use App\Http\Controllers\Like\QuestionController as LikeQuestionController;

// 検索
use App\Http\Controllers\SearchController;

// 記録
use App\Http\Controllers\RecordController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/


/**
 *  ユーザ
*/
Route::prefix('user')->name('user.')->group(function () {
    Route::get('index', [UserController::class,'index'])->name('index'); // ユーザログイン情報
    Route::get('show/{id}',[UserController::class, 'show'])->name('show'); // ユーザプロフィール情報
    Route::post('edit',[UserController::class, 'edit'])->name('edit'); // ユーザプロフィール情報編集
    Route::post('store', [RegisterController::class,'store'])->name('store'); // ユーザ新規登録
    Route::post('login',[LoginController::class, 'login'])->name('login'); // ユーザログイン
    Route::get('logout',[LogoutController::class, 'logout'])->name('logout'); // ユーザログアウト

    // ユーザプロフィール情報
    Route::prefix('/{id}/list')->name('list.')->group(function () {
        Route::get('question', [ProfileController::class,'question'])->name('question'); // ユーザ 投稿一覧
    });
});

/**
 * ダッシュボード
 */
Route::prefix('dashbord')->name('dashbord.')->group(function () {
    Route::get('index', [DashbordController::class,'index'])->name('index'); // ダッシュボード情報
    Route::get('/show/{date}', [DashbordController::class,'show'])->name('show'); // ダッシュボード情報
});

/**
 * フォロー
 */
Route::prefix('follow')->name('follow.')->group(function () {
    Route::get('/show/{id}', [FollowController::class,'show'])->name('show'); // フォロー判定
    Route::post('/store', [FollowController::class,'store'])->name('store'); // フォローする
    Route::post('/destroy', [FollowController::class,'destroy'])->name('destroy'); // フォロー解除
});

/**
 *  質問
 */
Route::prefix('question')->name('question.')->group(function () {
    Route::get('/', [QuestionController::class,'index'])->name('index'); // 質問おすすめ一覧
    Route::get('/latest', [QuestionController::class,'latest'])->name('latest'); // 質問最新順一覧
    Route::get('/like', [QuestionController::class,'like'])->name('like'); // 質問いいね一覧
    Route::get('/follow', [QuestionController::class,'follow'])->name('follow'); // フォローユーザ質問一覧
    Route::get('/{id}', [QuestionController::class,'show'])->name('how'); // 質問詳細
    Route::post('/store', [QuestionController::class,'store'])->name('store'); // 質問保存

    // 教科絞り込み
    Route::prefix('subject')->name('subject.')->group(function () {
        Route::get('{id}', [SubjectController::class,'index'])->name('index'); // 質問おすすめ一覧
        Route::get('/latest/{id}', [SubjectController::class,'latest'])->name('latest'); // 質問最新順一覧
        Route::get('/like/{id}', [SubjectController::class,'like'])->name('like'); // 質問いいね一覧
        Route::get('/follow/{id}', [SubjectController::class,'follow'])->name('follow'); // フォローユーザ質問一覧
    });

    // 科目絞り込み
    Route::prefix('course')->name('course.')->group(function () {
        Route::get('{id}', [CourseController::class,'index'])->name('index'); // 質問おすすめ一覧
        Route::get('/latest/{id}', [CourseController::class,'latest'])->name('latest'); // 質問最新順一覧
        Route::get('/like/{id}', [CourseController::class,'like'])->name('like'); // 質問いいね一覧
        Route::get('/follow/{id}', [CourseController::class,'follow'])->name('follow'); // フォローユーザ質問一覧
    });

    // 返信
    Route::prefix('reply')->name('reply.')->group(function () {
        Route::get('/{id}', [ReplyController::class,'index'])->name('index'); // 質問返信一覧
        Route::post('/store', [ReplyController::class,'store'])->name('store'); // 質問おすすめ一覧
    });

});

/**
 *  いいね
 */
Route::prefix('like')->name('like.')->group(function () {
    Route::get('index/{id}', [LikeQuestionController::class,'index'])->name('index'); // 質問いいね判定
    Route::post('store', [LikeQuestionController::class,'store'])->name('store'); // いいね保存
    Route::post('destroy', [LikeQuestionController::class,'destroy'])->name('destroy'); // いいね削除
});

/**
 *  検索
 */
Route::prefix('search')->name('search.')->group(function () {
    Route::get('{keyword}', [SearchController::class,'question'])->name('question'); // 質問検索
    Route::get('user/{keyword}', [SearchController::class,'user'])->name('user'); // ユーザ検索
});

/**
 *  記録
 */
Route::prefix('record')->name('record.')->group(function () {
    Route::post('store', [RecordController::class,'store'])->name('store'); // 記録保存
});
