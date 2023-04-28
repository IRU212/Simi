import React, { useState } from 'react'
import axios from 'axios'

import styles from '../../../../../../public/scss/parts/setting.module.scss'

// コンポネート呼び出し
import LoginUserApi from '../../../api/get/LoginUserApi'

export default function Edit() {

    const loginData = LoginUserApi()

    // DB保存用変数
    const [name,setName] = useState()
    const [iconImage,setIconImage] = useState()
    const [backImage,setBackImage]  = useState()

    // 名前入力許可判定
    const [isNameInput,setIsNameInput] = useState(false)

    // 名前の変更内容を変数に代入
    const NameChange = (e) => {
        setName(e.target.value)
    }

    const IsNameInputClick = () => {
        setIsNameInput(!isNameInput)
        setName("")
    }

    const SaveClick = () => {

        const data = new FormData()
        data.append("name",name) // 名前

        axios
            .post("/api/user/edit",data)
            .then(() => {

            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div className={styles.edit}>

                {/* 背景画像 */}
                <div className={styles.backImage}>
                    <img src="https://prtimes.jp/i/30865/238/origin/d30865-238-463172-2.png" alt="背景画像" />
                </div>

                {/* プロフィール情報 */}
                <section>

                    <div className={styles.iconImage}>
                        <img src="https://start-nerve.jp/wp-content/uploads/2021/05/kDPQYANH_400x400-400x360.jpg" alt="アイコン" />
                    </div>

                    { isNameInput ?
                        <input type="text" value={name} className={styles.nameInput} onChange={NameChange} placeholder='名前を入力' />
                        :
                        <div className={styles.name}>
                            { loginData?.name }
                        </div>
                    }

                    { isNameInput ?
                        <div className={styles.nameChange} onClick={IsNameInputClick}>
                            キャンセル
                        </div>
                        :
                        <div className={styles.nameChange} onClick={IsNameInputClick}>
                            名前を変更
                        </div>
                    }

                </section>

            </div>

            <div className={styles.SaveButton} onClick={SaveClick}>
                保存
            </div>
        </>
    )
}
