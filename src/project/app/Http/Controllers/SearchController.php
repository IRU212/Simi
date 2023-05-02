<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\User;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function user($keyword)
    {
        // モデル　インスタンス呼び出し
        $user = new User();

        $data = $user->with('user')
                     ->where('name','LIKE',"%{$keyword}%")
                     ->paginate(20);

        // JSONで返す
        return response()->json($data);
    }

    public function question($keyword)
    {
        // モデル　インスタンス呼び出し
        $question = new Question();

        $data = $question->with('user')
                         ->where('body','LIKE',"%{$keyword}%")
                         ->paginate(20);

        // JSONで返す
        return response()->json($data);
    }
}
