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
        'course'
    ];
}
