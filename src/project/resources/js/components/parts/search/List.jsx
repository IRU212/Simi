import React, { useEffect, useState } from 'react'
import styles from '../../../../../public/scss/parts/question.module.scss'
import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// 検索結果　
export default function List() {

    // Apiデータ取得
    const [data,setData] = useState([])

    // ドメイン以降のURLを取得
    const pathname = window.location.pathname

    // 初期ページネイトページ数
    const [idPagenate,setIdPagenate] = useState(1)

    // urlを取得
    const url = window.location.href

    // クエリー取得 keyword
    const getUrl = url.split("=")[1]

    // URLが変更されるたびに実行
    useEffect(() => {
        axios
            .get(`http://localhost:8081/api${pathname}/${getUrl}`)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [pathname])

    // 検索結果見つからない　メッセージ
    function NotFoud() {
        return(
            <div className={styles.noSearch}>
                見つかりませんでした
            </div>
        )
    }

    if (getUrl == undefined) {
        return(
            <div className={styles.noSearch}>
                検索してください
            </div>
        )
    } else if(pathname == "/search") {
        return (
            <div className={styles.List}>
                { data.length <= 0 ?
                    <NotFoud />
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
                                    { item.body ?
                                        item.body.split("\n").map((item,index) => {
                                            return(
                                                <div key={index}>
                                                    { index > 2 ?
                                                        ""
                                                        :
                                                        item
                                                    }
                                                </div>
                                            )
                                        })
                                        :
                                        ""
                                    }
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        )
    } else {
        return(
            <div className={styles.List}>
                { data.length <= 0 ?
                    <NotFoud />
                    :
                    data.map((item,index) =>
                        <Link to={`/profile/${item.id}`} className={styles.userItem} key={index}>
                            <Link to={`/profile/${item.id}`} className={styles.icon}>
                                <img src="https://start-nerve.jp/wp-content/uploads/2021/05/kDPQYANH_400x400-400x360.jpg" alt="アイコン" />
                            </Link>
                            <div className={styles.main}>
                                <div className={styles.title}>
                                    { item.name }
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        )
    }
}
