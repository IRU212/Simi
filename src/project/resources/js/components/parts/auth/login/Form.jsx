import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// スタイル
import styles from '../../../../../../public/scss/parts/auth.module.scss'

export default function Form() {

    // 元URL
    const urlOrigin = window.location.origin

    // 入力内容保持
    const [email,setEmail] = useState("") // メールアドレス
    const [password,setPassword] = useState("") // パスワード

    // バリテージョンエラーメッセージ
    const [errorEmail,setErrorEmail] = useState("") // メールアドレス
    const [errorPassword,setErrorPassword] = useState("") // パスワード

    // 入力内容代入 メールアドレス
    const EmailChange = (e) => {
        setEmail(e.target.value)
    }

    // 入力内容代入 パスワード
    const PasswordChange = (e) => {
        setPassword(e.target.value)
    }

    // クリックしたらAPIでバックエンドに送信
    const PostClick = () => {

        axios
            .post("/api/user/login", {
                email: email,
                password: password
            })
            .then(() => {
                location.href = urlOrigin
            })
            .catch((err) => {

                // バリデーション内容の取得
                const errorMessage = err.response.data || err.message

                // エラーメッセージ取得
                setErrorEmail(errorMessage.errors.email) // メールアドレス
                setErrorPassword(errorMessage.errors.password) // パスワード

            })
    }

    return (
        <div className={styles.auth}>

            <div className={styles.FormCover}>

                <section>

                    <div className={styles.name}>メールアドレス</div>
                    <input type="text" onChange={EmailChange} />

                    {/* バリテージョンメッセージ[メールアドレス] */}
                    { errorEmail !== undefined ? errorEmail : "" }

                </section>
                <section>

                    <div className={styles.name}>パスワード</div>
                    <input type="password" onChange={PasswordChange} />

                    {/* バリテージョンメッセージ[パスワード] */}
                    { errorPassword !== undefined ? errorPassword : "" }

                </section>

            </div>

            <div className={styles.subContent}>

                <Link to="/register" className={styles.linkAuth} >
                    新規登録
                </Link>

                {/* ログインボタン */}
                <div onClick={PostClick} className={styles.saveButton}>
                    ログイン
                </div>

            </div>

        </div>
    )
}
