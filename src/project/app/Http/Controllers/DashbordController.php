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
            'follow' => $follow->where('user_id','=',session('login_id')[0])->count() // フォロー数
        ];

        // JSONで返す
        return response()->json($data);
    }

    public function show($date)
    {
        $time_year = str_split($date, 4)[0]; // 年
        $time_month = str_split($date, 2)[2]; // 月
        $time_date = str_split($date, 2)[3]; // 月

        // 検索する日付
        $search_date = $time_year . "-" . $time_month . "-" . $time_date;

        // モデル　インスタンス呼び出し
        $question = new Question();

        $data = $question->with('user')
                         ->whereBetween('created_at', [$search_date . ' 00:00:00', $search_date . ' 23:59:59'])
                         ->where('user_id',session('login_id')[0])
                         ->paginate(20);

        // JSONで返す
        return response()->json($data);
    }
}
