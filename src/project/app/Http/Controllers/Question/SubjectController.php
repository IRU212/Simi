<?php

namespace App\Http\Controllers\Question;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    /**
     * おすすめ質問一覧
     *
     * @return void
     */
    public function index($id)
    {
        // モデル　インスタンス呼び出し
        $question = new Question();

        $data = $question->where('subject','=',$id)
                         ->with('user')
                         ->inRandomOrder()
                         ->paginate(20);

        // JSONで返す
        return response()->json($data);
    }

    /**
     * 質問最新順一覧
     *
     * @return void
     */
    public function latest($id)
    {
        // モデル　インスタンス呼び出し
        $question = new Question();

        $data = $question->with('user')
                         ->where('subject','=',$id)
                         ->latest()
                         ->paginate(20);

        // JSONで返す
        return response()->json($data);
    }

    /**
     * 質問いいね一覧
     *
     * @param Request $request
     * @return void
     */
    public function like($id)
    {
        // モデル　インスタンス呼び出し
        $question = new Question();

        $data = $question->with('user')
                         ->with('like')
                         ->where('subject','=',$id)
                         ->whereHas('like', function($q){
                            $q->where('question_id','!=',null);
                        })
                         ->latest()
                         ->paginate(20);

        // JSONで返す
        return response()->json($data);
    }

    /**
     * フォローユーザ質問一覧
     *
     * @param Request $request
     * @return void
     */
    public function follow($id)
    {
        // モデル　インスタンス呼び出し
        $question = new Question();

        $data = $question->with('user')
                         ->with('follow')
                         ->where('subject','=',$id)
                         ->whereHas('follow', function($q){
                            $q->where('user_id','=',session('login_id')[0]);
                        })
                         ->latest()
                         ->paginate(20);

        // JSONで返す
        return response()->json($data);
    }
}
