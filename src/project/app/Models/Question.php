<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $table = "question";

    protected $fillable = [
        'name',
        'body',
        'image',
        'subject',
        'course'
    ];
}
