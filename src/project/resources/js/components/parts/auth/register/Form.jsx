import { useState } from 'react'
import axios from 'axios'

// スタイル
import styles from '../../../../../../public/scss/parts/auth.module.scss'

// 新規アカウントログイン　フォーム
export default function Form() {

    // 入力内容保持
    const [name,setName] = useState("") // 名前
    const [email,setEmail] = useState("") // メールアドレス
    const [password,setPassword] = useState("") // パスワード

    // バリテージョンエラーメッセージ
    const [errorName,setErrorName] = useState("") // 名前
    const [errorEmail,setErrorEmail] = useState("") // メールアドレス
    const [errorPassword,setErrorPassword] = useState("") // パスワード

    // 入力内容代入 名前
    const NameChange = (e) => {
        setName(e.target.value)
    }

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
            .post("/api/user/store", {
                name: name,
                email: email,
                password: password
            })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {

                // バリデーション内容の取得
                const errorMessage = err.response.data || err.message

                // エラーメッセージ取得
                setErrorName(errorMessage.errors.name) // 名前
                setErrorEmail(errorMessage.errors.email) // メールアドレス
                setErrorPassword(errorMessage.errors.password) // パスワード

            })
    }


    return (
        <div className={styles.register}>

            <div className={styles.FormCover}>

                <section>

                    <div className={styles.name}>ユーザ名</div>
                    <input type="text" onChange={NameChange} />

                    {/* バリテージョンメッセージ[ユーザ名] */}
                    { errorName !== undefined ? errorName : "" }

                </section>
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

            {/* ログインボタン */}
            <div onClick={PostClick}>
                ログイン
            </div>

        </div>
    )
}
