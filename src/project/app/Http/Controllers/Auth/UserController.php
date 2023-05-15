<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{

    /**
     * アカウントログイン情報
     *
     * @param Request $request
     * @return void
     */
    public function index(Request $request)
    {
        // モデル　コンストラクタ呼び出し
        $user = new User();

        // ログイン情報存在判定
        if (session()->has('login_id')) {

            // クエリー
            $data = $user->find(session('login_id'));

            return response()->json($data[0]);

        } else {
            return response()->json(false);
        }
    }

    /**
     * プロフィール　ユーザ情報
     * idはuser.idを参照
     *
     * @param int $id
     * @return void
     */
    public function show($id)
    {
        // モデル　コンストラクタ呼び出し
        $user = new User();

        $data = $user->find($id);

        if (!$data) {
            return response()->json(false);
        } else {
            return response()->json($data);
        }
    }

    public function edit(Request $request)
    {
        // フォーム request 取得
        $name = $request->name; // 名前
        $icon_image = $request->icon_image; // アイコン画像
        $back_image = $request->back_image; // 背景画像

        // モデル　コンストラクタ呼び出し
        $user = new User();

        if ($name !== null) {
            // ユーザ情報の編集
            $user->where('id','=',session('login_id'))->update(['name' => $name]);
        }

        // アイコン画像ファイルアップロード成功　判定
        if($icon_image !== null) {

            // // アップロードされたファイル名を取得
            // $file_name = $icon_image->getClientOriginalName();

            // // 取得したファイル名で保存
            // $image = $icon_image->storeAs('public/image', $file_name);

            // 保存ディレクトリ
            $dir = "/user/" . session('login_id')[0];

            // S3へファイルをアップロード
            $path = Storage::disk('s3')->put($dir, $icon_image);

            // アップロードした画像のフルパスを取得
            $file_name = Storage::disk('s3')->url($path);

            // ユーザ情報の編集
            $user->where('id','=',session('login_id'))->update(['icon_image' => $file_name]);
        }

        // 背景画像ファイルアップロード成功　判定
        if($back_image !== null) {

            // アップロードされたファイル名を取得
            $file_name = $back_image->getClientOriginalName();

            // 取得したファイル名で保存
            $image = $back_image->storeAs('public/image', $file_name);

            // ユーザ情報の編集
            $user->where('id','=',session('login_id'))->update(['back_image' => $request->getUriForPath('') . '/storage/image/' . $file_name]);
        }
    }
}
