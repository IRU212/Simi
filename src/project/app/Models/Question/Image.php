<?php

namespace App\Models\Question;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    // テーブル名
    protected $table = "question_image";

    // カラム名
    protected $fillable = [
        'image',
        'question_id'
    ];

    // タイムスタンプ無効
    public $timestamps = false;

    /**
     * 非表示にするカラム
     *
     * @var array
     */
    protected $hidden = [
        'question_id',
    ];
}
