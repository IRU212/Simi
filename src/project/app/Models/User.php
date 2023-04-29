<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory;

    /**
     * テーブル名
     *
     * @var string
     */
    protected $table = "user";

    /**
     * 利用するカラム名
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'icon_image',
        'back_image'
    ];

    /**
     * 非表示にするカラム
     *
     * @var array
     */
    protected $hidden = [
        'password',
    ];
}
