<?php

namespace App\Services;

use Illuminate\Http\Request;

class ImageService
{
    public function local($icon_image)
    {
        // アップロードされたファイル名を取得
        $file_name = $icon_image->getClientOriginalName();

        // 取得したファイル名で保存
        $image = $icon_image->storeAs('public/image', $file_name);

        return 'http://localhost:8081/storage/image/' . $file_name;
    }
}
