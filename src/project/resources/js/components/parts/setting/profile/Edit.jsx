import React, { useState } from 'react'
import axios from 'axios'

import styles from '../../../../../../public/scss/parts/setting.module.scss'

// コンポネート呼び出し
import LoginUserApi from '../../../api/get/LoginUserApi'

export default function Edit() {

    const loginData = LoginUserApi()

    // DB保存用変数
    const [name,setName] = useState("")
    const [iconImage,setIconImage] = useState("")
    const [backImage,setBackImage]  = useState("")

    // プレビュー用画像変数
    const [previewIconImage, setPreviewIconImage] = useState(null)
    const [previewBackImage, setPreviewBackImage] = useState(null)

    // 名前入力許可判定
    const [isNameInput,setIsNameInput] = useState(false)

    // 名前の変更内容を変数に代入
    const NameChange = (e) => {
        setName(e.target.value)
    }

    // 画像の変更内容を変数に代入 背景画像
    const BackFileChange = (e) => {

        // DB保存用変数に画像を入れる
        setBackImage(e.target.files[0])

        // オブジェクトURLを生成し、useState()を更新
        setPreviewBackImage(window.URL.createObjectURL(e.target.files[0]))
    }

    // 画像の変更内容を変数に代入 アイコン
    const IconFileChange = (e) => {

        // DB保存用変数に画像を入れる
        setIconImage(e.target.files[0])

        // オブジェクトURLを生成し、useState()を更新
        setPreviewIconImage(window.URL.createObjectURL(e.target.files[0]))
    }

    // 名前の入力のキャンセル
    const IsNameInputClick = () => {
        setIsNameInput(!isNameInput)
        setName("")
    }

    // クリックしたら保存
    const SaveClick = () => {

        const data = new FormData()
        data.append("name",name) // 名前
        data.append("icon_image",iconImage) // アイコン画像
        data.append("back_image",backImage) // 背景画像

        axios
            .post("/api/user/edit",data,
                {
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                }
            )
            .then(() => {
                // 変更成功時にページリロード
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <div className={styles.edit}>

                {/* 背景画像 */}
                <input type="file" id='backImage' accept="image/*" multiple onChange={BackFileChange} />
                <label htmlFor='backImage' className={styles.backImage}>
                    { previewBackImage == null ?
                        <img src={`${loginData?.back_image}`} alt="背景画像" />
                        :
                        <img src={`${previewBackImage}`} />
                    }
                </label>

                {/* プロフィール情報 */}
                <section>

                    {/* アイコン画像 */}
                    <input type="file" id='iconImage' accept="image/*" multiple onChange={IconFileChange} />
                    <label htmlFor='iconImage' className={styles.iconImage}>
                        { previewIconImage == null ?
                            <img src={`${loginData?.icon_image}`} alt="アイコン" />
                            :
                            <img src={`${previewIconImage}`} />
                        }
                    </label>

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
