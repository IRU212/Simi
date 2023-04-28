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

    /**
     * プロフィール　ユーザ情報
     * idはuser.idを参照
     *
     * @param int $id
     * @return void
     */
    public function show($id)
    {
        // モデル　コンストラクタ呼び出し
        $user = new User();

        $data = $user->find($id);

        if (!$data) {
            return response()->json(false);
        } else {
            return response()->json($data);
        }
    }

    public function edit(Request $request)
    {
        // フォーム request 取得
        $name = $request->name; // 名前

        // モデル　コンストラクタ呼び出し
        $user = new User();

        // ユーザ情報の編集
        $user->where('id','=',session('login_id'))
                          ->update(['name' => $name]);

    }
}
