<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required | between:5,30',
            'email' => 'required | unique:user',
            'password' => 'required | between:5,30'
        ];
    }

    /**
     * エラーメッセージ
     *
     * @return void
     */
    public function messages(){
        return [
            'name.required' => 'ユーザ名を入力してください',
            'name.between' => 'ユーザ名を5~30字以内で入力してください',
            'email.required' => 'メールアドレスを入力してください',
            'name.unique' => 'このメールアドレスは既に存在しています',
            'password.required' => 'パスワードを入力してください',
            'password.between' => 'パスワードを5~30字以内で入力してください',
        ];
    }

    /**
     * エラーメッセージをJSON形式でフロントに送信
     *
     * @param Validator $validator
     * @return void
     */
    protected function failedValidation(Validator $validator)
    {
        $res = response()->json([
            'errors' => $validator->errors(),
            ],
            400);
        throw new HttpResponseException($res);
    }
}
