<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function index() {

    }

    /**
     * 質問最新順一覧
     *
     * @return void
     */
    public function latest()
    {
        $question = new Question();

        $data = $question->latest()->paginate(20);

        return response()->json($data);
    }

    /**
     * 質問保存
     *
     * @param Request $request
     * @return void
     */
    public function store(Request $request) {

        $question = new Question();

        $question->name = $request->name;
        $question->body = $request->body;
        $question->subject = $request->subject;
        $question->course = $request->course;
        $question->user_id = session('login_id')[0];

        $question->save();
    }
}
