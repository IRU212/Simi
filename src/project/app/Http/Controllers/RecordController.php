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
                            DB::raw("SUM(TIME_TO_SEC(time)) / 60 / 60 as time"),
                            DB::raw("MONTHNAME(created_at) as month")
                        )
                        ->whereYear('created_at', date('Y'))
                        ->groupBy('month')
                        ->get();

        // 1月から12月までの月配列
        $month_array = [
            ["month" => "January", "time" => "0"],
            ["month" => "February", "time" => "0"],
            ["month" => "March", "time" => "0"],
            ["month" => "April", "time" => "0"],
            ["month" => "May", "time" => "0"],
            ["month" => "June", "time" => "0"],
            ["month" => "July", "time" => "0"],
            ["month" => "August", "time" => "0"],
            ["month" => "September", "time" => "0"],
            ["month" => "October", "time" => "0"],
            ["month" => "November", "time" => "0"],
            ["month" => "December", "time" => "0"]
        ];

        // DB取得データ
        foreach ($month_each_data as $index => $item) {

            function up($time) {

            }

            // DB取得データ　月の位置を取得
            $month_array_position = array_search($item["month"], array_column($month_array,"month"));

            // 月データを入れ替え
            $month_array[$month_array_position]["time"] = ceil($item["time"]);

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
