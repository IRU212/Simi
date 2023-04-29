<?php

namespace App\Models\Like;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    // テーブル名
    protected $table = "question_like";

    // カラム名
    protected $fillable = [
        'question_id',
        'user_id'
    ];
}
