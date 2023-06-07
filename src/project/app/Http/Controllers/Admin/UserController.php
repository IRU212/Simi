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
        $data = $user->select('*')
                    ->selectRaw( // 教科の名前を取得
                        "(CASE role
                            WHEN 0 THEN 'ユーザ'
                            WHEN 1 THEN '管理者'
                            WHEN 2 THEN '管理者'
                            ELSE NULL
                        END) as role"
                    )
                    ->selectRaw( // 教科の名前を取得
                        "(CASE situation
                            WHEN 0 THEN '稼働中'
                            WHEN 1 THEN '停止中'
                            ELSE NULL
                        END) as situation"
                    )
                    ->paginate(10);

        // 200の時にJSONを返す
        return response()->json($data, 200);
    }

    /**
     * アカウント状態変更
     *
     * @param Request $request
     * @return void
     */
    public function situation_store(Request $request)
    {
        // リクエスト取得
        $user_id = $request->id; // ユーザID
        $situation_id = $request->situation; // ユーザ状態

        // モデルインスタンス呼び出し
        // モデルテーブル user
        $user = new User();

        if ($situation_id == 2) {

            // アカウント削除
            $user->where('id','=',$user_id)
                 ->delete();

        } else {

            // ユーザの状況を停止中か再開する
            $user->where('id','=',$user_id)
                 ->update([
                    'situation' => $situation_id
                 ]);

        }

        // 200の時にJSONを返す
        return response()->json(true, 200);
    }
}
