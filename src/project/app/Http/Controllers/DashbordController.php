<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Question;
use App\Models\Like\Question as LikeQuestion;
use App\Models\Follow;

class DashbordController extends Controller
{
    public function index()
    {
        // モデル　インスタンス呼び出し
        $question = new Question();
        $follow = new Follow();
        $question_like = new LikeQuestion();

        $data = [
            'question' => $question->where('user_id','=',session('login_id')[0])->count(), // 質問投稿数
            'like' => $question_like->where('user_id','=',session('login_id')[0])->count(), // いいね数
            'follower' => $follow->where('user_id','=',session('login_id')[0])->count() // フォロー数
        ];

        // JSONで返す
        return response()->json($data);
    }
}
