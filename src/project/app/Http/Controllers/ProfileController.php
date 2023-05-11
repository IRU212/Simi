<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;

class ProfileController extends Controller
{
    public function question($id)
    {
        // モデルインスタンス呼び出し
        $question = new Question();

        $data = $question->where('user_id','=',$id)
                         ->with('user')
                         ->latest()
                         ->paginate(20);

        return response()->json($data);
    }
}
