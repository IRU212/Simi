<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageService
{
    /**
     * ローカル環境
     *
     * 画像storage保存処理
     *
     * @param [type] $image
     * @return 画像path
     */
    public function local($image)
    {
        // アップロードされたファイル名を取得
        $file_name = $image->getClientOriginalName();

        // 取得したファイル名で保存
        $image = $image->storeAs('public/image', $file_name);

        // 画像パス
        return 'http://localhost:8081/storage/image/' . $file_name;
    }

    /**
     * デプロイ環境
     *
     * @param [type] $image
     * @param [type] $dir
     * @return void
     */
    public function production($image,$dir)
    {
        // S3へファイルをアップロード
        $path = Storage::disk('s3')->put($dir, $image);

        // アップロードした画像のフルパスを取得
        $full_path =  Storage::disk('s3')->url($path);

        // 画像パス
        return $full_path;
    }
}
