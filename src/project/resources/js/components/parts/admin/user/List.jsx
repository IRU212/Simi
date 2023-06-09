import { useEffect, useState } from 'react'
import styles from '../../../../../../public/scss/parts/admin/user.module.scss'
import axios from 'axios'

import LaunchIcon from '@mui/icons-material/Launch';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// ユーザ一覧リスト
export default function List() {

    // リスト表示データ
    const [datas,setDatas] = useState()

    // ページネート数
    const [pagenate,setPagenate] = useState(1)

    // チェック判定
    const [checkBoxValue,setCheckBoxValue] = useState(null)

    // ユーザ一覧データを呼び出し
    function ApiGetData() {

        // APIを呼び出し
        axios
            .get(`http://localhost:8081/api/admin/user/index?page=${pagenate}`)
            .then((res) => {
                setDatas(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    // リロード時に実行
    useEffect(() => {

        // ユーザ一覧データを呼び出し
        ApiGetData()

    },[pagenate])

    // クリックしたらページ数を増やす
    const AddPagenateClick = () => {
        setPagenate(() => setPagenate(pagenate + 1))
    }

    // クリックしたらページ数減らす
    const DownPagenateClick = () => {
        setPagenate(() => setPagenate(pagenate - 1))
    }

    // 選択中ユーザID
    const [selectUserId,setSelectUserId] = useState()

    // モーダル判定
    const [modal,setModal] = useState(false)

    // モダール表示ボタンをクリック
    const ModalClick = (e) => {
        setModal(true)
        setSelectUserId(e)
    }

    // モダール背景をクリック
    const ModalBackClick = (e) => {
        if (e.target == e.currentTarget) {
            setModal(false)
        }
    }

    // 排他的なチェックボックス
    const CheckBoxChange = (e) => {
        setCheckBoxValue(e.target.value);
    }

    // クリックしたら保存
    const PostClick = () => {

        // モーダル非表示
        setModal(false)

        // APIを呼び出し
        axios
            .post(`/api/admin/user/situation_store`,{
                situation: checkBoxValue, // アカウント状態
                id : selectUserId // ユーザid
            })
            .then(() => {

                // ユーザ一覧データを呼び出し
                ApiGetData()

            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <table className={styles.userList}>

            <tr className={styles.titleItem}>
                <td className={styles.id}>
                    ID
                </td>
                <td className={styles.name}>
                    ユーザ名
                </td>
                <td className={styles.email}>
                    メールアドレス
                </td>
                <td className={styles.role}>
                    権限
                </td>
                <td className={styles.situation}>
                    状態
                </td>
                <td className={styles.iconCover}></td>
            </tr>
            { datas?.data?.map((item,index) => {
                return(
                    <tr key={index} className={styles.itemCover}>
                        <td className={styles.id}>
                            { item.id }
                        </td>
                        <td className={styles.name}>
                            { item.name }
                        </td>
                        <td className={styles.email}>
                            { item.email }
                        </td>
                        <td className={styles.role}>
                            { item.role }
                        </td>
                        <td className={styles.situation}>
                            { item.situation }
                        </td>
                        <td className={styles.iconCover}>
                            <LaunchIcon className={styles.icon} onClick={() => ModalClick(item.id)} />
                        </td>
                    </tr>

                )
            }) }
            <tr className={styles.footer}>
                <div className={styles.row}>
                    10 rows
                </div>
                <div className={styles.pagenateCover}>
                    { pagenate !== 1 ?
                        <KeyboardArrowLeftIcon className={styles.arrowIcon} onClick={DownPagenateClick} />
                        :
                        <KeyboardArrowLeftIcon className={styles.arrowNoIcon} />
                    }
                    { pagenate }
                    { datas?.next_page_url == null ?
                        <KeyboardArrowRightIcon className={styles.arrowNoIcon} />
                        :
                        <KeyboardArrowRightIcon className={styles.arrowIcon} onClick={AddPagenateClick} />
                    }
                </div>
            </tr>

            { modal ?
                <div className={styles.ModalBakcCover} onClick={(e) => ModalBackClick(e)}>
                    <div className={styles.ModalCover}>

                        <div className={styles.title}>
                            ユーザ情報を更新
                        </div>
                        <div className={styles.content}>

                            <section>
                                <input type="checkbox" value='0' checked={0 == checkBoxValue} onChange={CheckBoxChange} />
                                <div>
                                    アカウントを再開する
                                </div>
                            </section>
                            <section>
                                <input type="checkbox" value='1' checked={1 == checkBoxValue} onChange={CheckBoxChange} />
                                <div>
                                    アカウントを一時停止にする
                                </div>
                            </section>
                            <section>
                                <input type="checkbox" value='2' checked={2 == checkBoxValue} onChange={CheckBoxChange} />
                                <div>
                                    アカウントを削除する
                                </div>
                            </section>

                            {/* 送信ボタン */}
                            { checkBoxValue == 0 || checkBoxValue == 1 || checkBoxValue == 2 ?
                                <div className={styles.posuButton} onClick={() => PostClick()}>
                                    送信
                                </div>
                                :
                                ""
                            }

                        </div>

                    </div>
                </div>
                :
                ""
            }

        </table>
    )
}
