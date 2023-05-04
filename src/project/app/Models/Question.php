<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    // テーブル名
    protected $table = "question";

    // カラム名
    protected $fillable = [
        'name',
        'body',
        'image',
        'subject',
        'course',
        'user_id'
    ];

    // userテーブル取得
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // question_likeテーブル取得
    public function like()
    {
        return $this->hasOne(Like\Question::class,'question_id')->where('user_id','=',session('login_id')[0]);
    }

    // followテーブル取得
    public function follow()
    {
        return $this->belongsTo(Follow::class,'user_id','follow_id')->where('user_id','=',session('login_id')[0]);
    }
}
