<?php

namespace App\Models\Question;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

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

    // userテーブル取得
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
