<?php

namespace App\Http\Controllers\Like;

use App\Models\Like\Question;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class QuestionController extends Controller
{
    /**
     * 質問いいね判定
     *
     * @param [type] $id
     * @return void
     */
    public function index($id)
    {

        // モデルインスタンス呼び出し
        $question = new Question();

        $data = $question->where('question_id','=',$id)
                         ->where('user_id','=',session('login_id'))
                         ->exists();

        // JSONで表示
        return response()->json($data,200);
    }

    /**
     * 質問をいいね
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        // モデルインスタンス呼び出し
        $question = new Question();

        // 保存用データ格納
        $question->question_id = $request->question_id;
        $question->user_id = session('login_id');

        // DBに保存
        $data = $question->save();

        // JSONで表示
        return response()->json($data,200);
    }
}
