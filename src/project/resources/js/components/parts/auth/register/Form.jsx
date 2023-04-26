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
            .then(() => {

            })
            .catch((err) => {
                console.log(err.data)
            })
    }

    return (
        <div className={styles.register}>

            <div className={styles.FormCover}>

                <section>
                    <div className={styles.name}>ユーザ名</div>
                    <input type="text" onChange={NameChange} />
                </section>
                <section>
                    <div className={styles.name}>メールアドレス</div>
                    <input type="text" onChange={EmailChange} />
                </section>
                <section>
                    <div className={styles.name}>パスワード</div>
                    <input type="password" onChange={PasswordChange} />
                </section>

            </div>

            {/* ログインボタン */}
            <div onClick={PostClick}>
                ログイン
            </div>

        </div>
    )
}
