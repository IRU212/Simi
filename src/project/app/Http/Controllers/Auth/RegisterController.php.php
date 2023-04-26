<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController.php extends Controller
{
    /**
     * アカウント新規登録
     *
     * @return void
     */
    public function store(Request $request)
    {
        // model コンストラクタ呼び出し
        $user = new User();

        // request 受け取りデータ 保存
        $user->save();
    }
}
