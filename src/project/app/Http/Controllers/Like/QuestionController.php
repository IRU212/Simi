<?php

namespace App\Http\Controllers\Like;

use App\Models\Like\Question;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function index($id)
    {

        // モデルインスタンス呼び出し
        $question = new Question();

        $data = $question->where('question_id','=',$id)
                         ->where('user_id','=',session('login_id'))
                         ->exists();

        // JSONで表示
        return response()->json($data);
    }
}
