<?php

namespace App\Models\Question;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    // テーブル名
    protected $table = "question_reply";

    // カラム名
    protected $fillable = [
        "name",
        "body",
        "image",
        "question_id",
        "user_id",
    ];
}
