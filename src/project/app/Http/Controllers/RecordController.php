<?php

namespace App\Http\Controllers;

use App\Models\Record;
use App\Models\Book;
use Illuminate\Http\Request;
use Carbon\Carbon;
use DB;

class RecordController extends Controller
{
    public function index()
    {
        // モデルインスタンス呼び出し
        $record = new Record();

        // 月ごとの勉強時間を取得
        $month_each_data = $record->select(
                            DB::raw("SEC_TO_TIME(SUM(TIME_TO_SEC(time))) as time"),
                            DB::raw("MONTHNAME(created_at) as month")
                        )
                        ->whereYear('created_at', date('Y'))
                        ->groupBy('month')
                        ->get();

        // 1月から12月までの月配列
        $month_array = [
            ["month" => "January", "time" => "00:00:00"],
            ["month" => "February", "time" => "00:00:00"],
            ["month" => "March", "time" => "00:00:00"],
            ["month" => "April", "time" => "00:00:00"],
            ["month" => "May", "time" => "00:00:00"],
            ["month" => "June", "time" => "00:00:00"],
            ["month" => "July", "time" => "00:00:00"],
            ["month" => "August", "time" => "00:00:00"],
            ["month" => "September", "time" => "00:00:00"],
            ["month" => "October", "time" => "00:00:00"],
            ["month" => "November", "time" => "00:00:00"],
            ["month" => "December", "time" => "00:00:00"]
        ];

        // DB取得データ
        foreach ($month_each_data as $index => $item) {

            // DB取得データ　月の位置を取得
            $month_array_position = array_search($item["month"], array_column($month_array,"month"));

            $month_array[$month_array_position] = $item;

        }

        return response()->json($month_array, 200);
    }

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
        $record_id = $record->latest('id')->first()->id;

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
