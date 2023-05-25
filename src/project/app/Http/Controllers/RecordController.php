<?php

namespace App\Http\Controllers;

use App\Models\Record;
use App\Models\Book;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    /**
     * 勉強記録保存
     *
     * @param Request $request
     * @return void
     */
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

        // record最新主キー取得ID
        $record_id = $record->latest('id')->first();

        foreach ($request->book_list as $index => $item) {

            // モデルインスタンス呼び出し
            $book = new Book();

            $book->title = $item['title']; // 書籍タイトル
            $book->selfLink = $item['selfLink']; // 書籍個別リンク
            $book->record_id = $record_id; // 記録ID
            $book->user_id = session('login_id')[0]; // ログインID

            // DBに保存
            $book->save();

        }
    }
}
