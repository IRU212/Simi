<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
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

        $user->name = $request->name; // 名前
        $user->email = $request->email; // メールアドレス
        $user->password = Hash::make($request->password); // パスワード ・ハッシュ化

        // request 受け取りデータ 保存
        $user->save();
    }
}
