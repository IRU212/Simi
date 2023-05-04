<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Requests\Auth\RegisterRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    /**
     * アカウント新規登録
     *
     * @return void
     */
    public function store(RegisterRequest $request)
    {
        // model コンストラクタ呼び出し
        $user = new User();

        // セッション削除
        $request->session()->forget('login_id');

        $user->name = $request->name; // 名前
        $user->email = $request->email; // メールアドレス
        $user->password = Hash::make($request->password); // パスワード ・ハッシュ化

        // request 受け取りデータ 保存
        $user->save();

        // ログインデータ sessionに保存
        $request->session()->push('login_id', $user->id);

    }
}
