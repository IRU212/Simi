<?php

namespace App\Http\Controllers\Question;

use App\Http\Controllers\Controller;
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
     * フォローユーザ質問一覧
     *
     * @param Request $request
     * @return void
     */
    public function follow()
    {
        // モデル　インスタンス呼び出し
        $question = new Question();

        $data = $question->with('user')
                         ->with('follow')
                         ->whereHas('follow', function($q){
                            $q->where('user_id','=',session('login_id')[0]);
                         })
                         ->latest()
                         ->paginate(20);

        // JSONで返す
        return response()->json($data);
    }


    public function show($id)
    {
        // モデル　インスタンス呼び出し
        $question = new Question();

        $data = $question->select('id','name','body','subject as subject_id','course as couse_id','user_id')
                         ->selectRaw( // 教科の名前を取得
                            "(CASE subject
                                WHEN 1 THEN '国語'
                                WHEN 2 THEN '数学'
                                WHEN 3 THEN '理科'
                                WHEN 4 THEN '社会'
                                WHEN 5 THEN '英語'
                            END) as subject"
                         )
                         ->selectRaw( // 科目の名前を取得
                            "(CASE course
                                WHEN 1 THEN '国語総合'
                                WHEN 2 THEN '国語表現'
                                WHEN 3 THEN '現代文A'
                                WHEN 4 THEN '現代文B'
                                WHEN 5 THEN '古典A'
                                WHEN 6 THEN '古典B'
                                WHEN 7 THEN '数学1'
                                WHEN 8 THEN '数学2'
                                WHEN 9 THEN '数学3'
                                WHEN 10 THEN '数学A'
                                WHEN 11 THEN '数学B'
                                WHEN 12 THEN '数学活用'
                                WHEN 13 THEN '科学と人間生活'
                                WHEN 14 THEN '物理基礎'
                                WHEN 15 THEN '物理'
                                WHEN 16 THEN '科学基礎'
                                WHEN 17 THEN '科学'
                                WHEN 18 THEN '生物基礎'
                                WHEN 19 THEN '生物'
                                WHEN 20 THEN '地学基礎'
                                WHEN 21 THEN '地学'
                                WHEN 22 THEN '理科課題研究'
                                WHEN 23 THEN '世界史A'
                                WHEN 24 THEN '世界史B'
                                WHEN 25 THEN '日本史A'
                                WHEN 26 THEN '日本史B'
                                WHEN 27 THEN '地学A'
                                WHEN 28 THEN '地学B'
                                WHEN 29 THEN '現代社会'
                                WHEN 30 THEN '論理'
                                WHEN 31 THEN '政治・経済'
                                WHEN 32 THEN 'コミュニケーション英語基礎'
                                WHEN 33 THEN 'コミュニケーション英語1'
                                WHEN 34 THEN 'コミュニケーション英語2'
                                WHEN 35 THEN 'コミュニケーション英語3'
                                WHEN 36 THEN '英語表現A'
                                WHEN 37 THEN '英語表現B'
                                WHEN 38 THEN '英語会話'
                            END) as course"
                         )
                         ->find($id);

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
