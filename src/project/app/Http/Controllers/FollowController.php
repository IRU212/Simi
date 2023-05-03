<?php

namespace App\Http\Controllers;

use App\Models\Follow;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    /**
     * フォロー判定
     *
     * @param [type] $id
     * @return void
     */
    public function show($id)
    {
        // モデル　インスタンス呼び出し
        $follow = new Follow();

        $data = $follow->where('user_id','=',session('login_id')[0])
                       ->where('follow_id','=',$id)
                       ->exists();

        // JSONで返す
        return response()->json($data);
    }

    /**
     * フォローする
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        // モデル　インスタンス呼び出し
        $follow = new Follow();

        $follow->follow_id = $request->follow_id;
        $follow->user_id = session('login_id')[0];

        // DBに保存
        $follow->save();

        // JSONで返却
        return response()->json(true,200);
    }
}
