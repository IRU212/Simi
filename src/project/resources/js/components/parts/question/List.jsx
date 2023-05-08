import React, { useEffect, useState } from 'react'
import styles from '../../../../../public/scss/parts/question.module.scss'
import { Link, useParams } from 'react-router-dom'
import IsLike from './like/IsLike'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function List() {

    // Apiデータ取得
    const [data,setData] = useState([])

    // ドメイン以降のURLを取得
    const pathname = window.location.pathname

    // パラメータを取得
    const paramsId = useParams()['id']

    // 初期ページネイトページ数
    const [idPagenate,setIdPagenate] = useState(1)

    // URLが変更されるたびに実行
    useEffect(() => {
        axios
            .get(`http://localhost:8081/api${pathname}?page=${idPagenate}`)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [pathname,paramsId])

    return (
        <div className={styles.List}>
            { data.length <= 0 ?
                <div className={styles.notList}>
                    検索結果が見つかりませんでした
                </div>
                :
                data.map((item,index) =>
                    <Link to={`/question/detail/${item.id}`} className={styles.questionItem} key={index}>
                        <Link to={`/profile/${item.user_id}`} className={styles.icon}>
                            { item.user.icon_image == null ?
                                <AccountCircleIcon className={styles.humnanIcon}  />
                                :
                                <img src={`${item.user.icon_image}`} alt="アイコン" />
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
                        {/* <IsLike questionId={item.id} /> */}
                    </Link>
                )
            }

        </div>
    )
}
