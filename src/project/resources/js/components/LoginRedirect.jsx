import React, { useEffect } from 'react'
import LoginUserApi from './api/get/LoginUserApi'

// 未ログイン状態の時はログイン画面に強制遷移
export default function LoginRedirect() {

    // ログインAPI取得
    const apiData = LoginUserApi()

    // ドメイン以降のURLを取得
    const pathname = window.location.pathname

    useEffect(() => {

        // if (pathname == "/" && apiData == false) {
        //     window.location.href = "/login"
        // }

    },[])

}
