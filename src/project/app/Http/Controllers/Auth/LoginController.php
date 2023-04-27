<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /**
     * ログイン
     *
     * @return void
     */
    public function login(Request $request)
    {
        // model コンストラクタ呼び出し
        $user = new User();

        // form リクエスト取得
        $email = $request->email;
        $password = $request->password;

        // 入力した一致したユーザ名を取得
        $user_data = $user->where('email','=',$email)
                          ->get()[0];

        // ハッシュ化したパスワードが一致判定
        if (Hash::check($password, $user_data->password)) {
            $request->session()->push('login_id', $user_data->id);
            return true;
        } else {
            return false;
        }

    }
}
