<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Like\Question;
use App\Models\Follow;

class DashbordController extends Controller
{
    public function index()
    {
        // モデル　インスタンス呼び出し
        $follow = new Follow();
        $question = new Question();

        $data = [
            'like' => $question->where('user_id','=',session('login_id')[0])->count(),
            'follower' => $follow->where('user_id','=',session('login_id')[0])->count()
        ];

        // JSONで返す
        return response()->json($data);
    }
}
