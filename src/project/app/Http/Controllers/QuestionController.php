<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    /**
     * おすすめ質問一覧
     *
     * @return void
     */
    public function index()
    {
        // モデル　インスタンス呼び出し
        $question = new Question();

        $data = $question->with('user')->inRandomOrder()->paginate(20);

        // JSONで返す
        return response()->json($data);
    }

    /**
     * 質問最新順一覧
     *
     * @return void
     */
    public function latest()
    {
        // モデル　インスタンス呼び出し
        $question = new Question();

        $data = $question->with('user')->latest()->paginate(20);

        // JSONで返す
        return response()->json($data);
    }

    /**
     * 質問いいね一覧
     *
     * @param Request $request
     * @return void
     */
    public function like()
    {
        // モデル　インスタンス呼び出し
        $question = new Question();

        $data = $question->with('user')
                         ->with('like')
                         ->whereHas('like', function($q){
                            $q->where('question_id','!=',null);
                        })
                         ->latest()
                         ->paginate(20);

        // JSONで返す
        return response()->json($data);
    }

    /**
     * 質問保存
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request)
    {
        // モデル　インスタンス呼び出し
        $question = new Question();

        $question->name = $request->name;
        $question->body = $request->body;
        $question->subject = $request->subject;
        $question->course = $request->course;
        $question->user_id = session('login_id')[0];

        // JSONで返す
        $question->save();
    }
}
