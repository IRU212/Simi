<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    /**
     * アカウントログイン情報
     *
     * @param Request $request
     * @return void
     */
    public function index(Request $request)
    {
        // モデル　コンストラクタ呼び出し
        $user = new User();

        // ログイン情報存在判定
        if (session()->has('login_id')) {

            // クエリー
            $data = $user->find(session('login_id'));

            return response()->json($data[0]);

        } else {
            return response()->json(false);
        }
    }
}
