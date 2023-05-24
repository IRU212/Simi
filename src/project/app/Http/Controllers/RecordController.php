<?php

namespace App\Http\Controllers;

use App\Models\Record;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    public function store(Request $request)
    {
        // モデルインスタンス呼び出し
        $record = new Record();

        $record->body = $request->body; // 一言コメント
        $record->subject = $request->subject; // 教科
        $record->course = $request->course; // 科目
        $record->time = $request->time; // 勉強時間
        $record->user_id = session('login_id')[0]; // ログインID

        // db保存
        $record->save();
    }
}
