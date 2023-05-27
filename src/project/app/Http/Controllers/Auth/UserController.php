<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Follow;
use App\Services\ImageService;
use Illuminate\Http\Request;

class UserController extends Controller
{

    private $image_save;

    public function __construct(ImageService $image_service) {
        $this->image_save = $image_service;
    }

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
        $follow = new Follow();

        // ユーザプロフィール情報
        $profile = $user->find($id);

        // フォローユーザ
        $follow_user = $follow->where('user_id','=',$id)->with('user')->get();

        // フォロワーユーザ
        $follower_user = $follow->where('follow_id','=',$id)->with('user')->get();

        // フォロー数
        $follow_count = $follow->where('user_id','=',$id)->count();

        // フォロワー数
        $follower_count = $follow->where('follow_id','=',$id)->count();

        $data = [
            "profile" => $profile,
            "follow_user" => $follow_user,
            "follow_count" => $follow_count,
            "follower_user" => $follower_user,
            "follower_count" => $follower_count
        ];

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

            // デプロイ環境でS3を使用
            if (config("app.env") === "production") {

                // 保存ディレクトリ
                $dir = "/user/" . session('login_id')[0];

                // ユーザ情報の編集
                $user->where('id','=',session('login_id')[0])->update(['icon_image' => $this->icon_image->production($icon_image,$dir)]);

            } else if (config("app.env") === "local") {

                // ユーザ情報の編集
                $user->where('id','=',session('login_id')[0])->update(['icon_image' => $this->image_save->local($request->icon_image)]);

            }
        }

        // 背景画像ファイルアップロード成功　判定
        if($back_image !== null) {

            // デプロイ環境でS3を使用
            if (config("app.env") === "production") {

                // 保存ディレクトリ
                $dir = "/user/" . session('login_id')[0];

                // ユーザ情報の編集
                $user->where('id','=',session('login_id')[0])->update(['back_image' => $this->image_save->production($back_image,$dir)]);

            } else if (config("app.env") === "local") {

                // ユーザ情報の編集
                $user->where('id','=',session('login_id')[0])->update(['back_image' => $this->image_save->local($back_image)]);

            }

        }
    }
}
