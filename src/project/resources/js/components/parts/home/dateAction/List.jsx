import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from '../../../../../../public/scss/parts/home.module.scss'

// 行動リスト
export default function List() {

    // Apiデータ取得
    const [data,setData] = useState([])

    // ドメイン以降のURLを取得
    const pathname = window.location.pathname

    // パラメータを取得
    const paramsDate = useParams()['date']

    // 初期ページネイトページ数
    const [idPagenate,setIdPagenate] = useState(1)

    // URLが変更されるたびに実行
    useEffect(() => {

        if (paramsDate == undefined) {

            const today = new Date()

            const todayYear = today.getFullYear()

            const todayMonth = String(today.getMonth() + 1).length == 1 ?
                                String(0) + String((today.getMonth() + 1))
                                :
                                (today.getMonth() + 1)

            const todayDate = String(today.getDate()).length == 1 ?
                                String(0) + String((today.getDate()))
                                :
                                (today.getDate())

            axios
                .get(`http://localhost:8081/api/dashbord/show/${todayYear + todayMonth + todayDate}page=${idPagenate}`)
                .then((res) => {
                    setData(res.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })

        } else {

            axios
                .get(`http://localhost:8081/api/dashbord/show/${paramsDate}page=${idPagenate}`)
                .then((res) => {
                    setData(res.data.data)
                })
                .catch((err) => {
                    console.log(err)
                })

        }
    }, [pathname,paramsDate])

    return (
        <div className={styles.List}>
            { data.length <= 0 ?
                <div className={styles.notList}>
                    何も行動していません
                </div>
                :
                data.map((item,index) =>
                    <Link to={`/question/detail/${item.id}`} className={styles.questionItem} key={index}>
                        <Link to={`/profile/${item.user_id}`} className={styles.icon}>
                            { item.user.icon_image !== null  ?
                                <AccountCircleIcon className={styles.humnanIcon}  />
                                :
                                <img src={item.user.icon_image} alt="アイコン" />
                            }
                        </Link>
                        <div className={styles.main}>
                            <div className={styles.title}>
                                { item.name }
                            </div>
                            <div>
                                { item.body.split("\n").map((item,index) => {
                                    return(
                                        <div key={index}>
                                            { index > 2 ?
                                                ""
                                                :
                                                item
                                            }
                                        </div>
                                    )
                                }) }
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}
