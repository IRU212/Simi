<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    // テーブル名
    protected $table = "book";

    protected $fillable = [
        "title",
        "selfLink"
        "record_id",
        "user_id"
    ];
}
