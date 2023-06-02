<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * ユーザ一覧を表示
     *
     * @return void
     */
    public function index()
    {
        // モデルインスタンス呼び出し
        // モデルテーブル user
        $user = new User();

        // Eloquant データベース
        $data = $user->paginate(10);

        // 200の時にJSONを返す
        return response()->json($data, 200);
    }
}
