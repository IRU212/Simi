<?php

namespace App\Http\Controllers\Question;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Question\Reply;

class ReplyController extends Controller
{
    public function index($id)
    {
        // モデル インスタンス呼び出し
        $reply = new Reply();

        $data = $reply->where('question_id',$id)
                     ->latest()
                     ->paginate(20);

        // JSON形式で返す
        return response()->json($data);
    }

    public function store(Request $request)
    {
        // モデル インスタンス呼び出し
        $reply = new Reply();

        // リクエスト取得
        $reply->body = $request->body;
        $reply->user_id = session('login_id')[0];
        $reply->question_id = $request->question_id;

        // DB保存
        $reply->save();
    }
}
