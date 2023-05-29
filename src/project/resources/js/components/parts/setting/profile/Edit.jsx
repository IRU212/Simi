import React, { useState } from 'react'
import axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import styles from '../../../../../../public/scss/parts/setting.module.scss'

// コンポネート呼び出し
import LoginUserApi from '../../../api/get/LoginUserApi'

export default function Edit() {

    // api取得　ユーザログインデータ
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

        // 5文字以上入力で保存可能
        if (e.target.value.length >= 5) {
            setIsSaveButton(true)
        } else {
            setIsSaveButton(false)
        }
    }

    // 画像の変更内容を変数に代入 背景画像
    const BackFileChange = (e) => {

        // DB保存用変数に画像を入れる
        setBackImage(e.target.files[0])

        // オブジェクトURLを生成し、useState()を更新
        setPreviewBackImage(window.URL.createObjectURL(e.target.files[0]))

        // 変更許可ボタンを表示
        setIsSaveButton(true)

        // 画像サイズ判定
        // 1GB以上だと保存不可
        if (e.target.files[0].size > 1000000) {
            setIsSaveButton(false)
        }
    }

    // 画像の変更内容を変数に代入 アイコン
    const IconFileChange = (e) => {

        // DB保存用変数に画像を入れる
        setIconImage(e.target.files[0])

        // オブジェクトURLを生成し、useState()を更新
        setPreviewIconImage(window.URL.createObjectURL(e.target.files[0]))

        // 変更許可ボタンを表示
        setIsSaveButton(true)

        // 画像サイズ判定
        // 1GB以上だと保存不可
        if (e.target.files[0].size > 1000000) {
            setIsSaveButton(false)
        }
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

    // 変更ボタン表示判定
    const [IsSaveBotton,setIsSaveButton] = useState(false)

    return (
        <>
            <div className={styles.edit}>

                {/* 背景画像 */}
                <input type="file" id='backImage' accept="image/*" multiple onChange={BackFileChange} />
                <label htmlFor='backImage' className={styles.backImage}>
                    { previewBackImage == null ?
                        <>
                            { loginData?.back_image == null ?
                                ""
                                :
                                <img src={`${loginData?.back_image}`} alt="背景画像" />
                            }
                        </>
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
                            <>
                                { loginData?.icon_image == null ?
                                    <AccountCircleIcon className={styles.humanIcon} />
                                    :
                                    <img src={`${loginData?.icon_image}`} alt="アイコン" />
                                }
                            </>
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

            {/* プロフィール編集内容がある際に変更ボタンを表示 */}
            { IsSaveBotton ?
                <div className={styles.SaveButton} onClick={SaveClick}>
                    保存
                </div>
                :
                ""
            }

        </>
    )
}
