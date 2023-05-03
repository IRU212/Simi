<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follow extends Model
{
    // テーブル名
    protected $table = "follow";

    // カラム名
    protected $fillable = [
        "follow_id",
        "user_id"
    ];

    // タイムスタンプ無効
    public $timestamps = false;
}
