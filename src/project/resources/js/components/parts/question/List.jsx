import React, { useCallback, useEffect, useState } from 'react'
import styles from '../../../../../public/scss/parts/question.module.scss'
import { Link, useParams } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// 質問一覧表示
export default function List() {

    // スクロールするたびに実行
    const changeBottom = useCallback(() => {
        const bottomPosition = document.body.offsetHeight - (window.scrollY + window.innerHeight);

        // スクロール位置が10以下になったら発火
        if (bottomPosition < 10) {
            setIdPagenate(idPagenate + 1)
        }
    }, []);

    // リロード時にスクロールイベントを呼び出し
    // スクロールするたびにchnageBottomを実行
    useEffect(() => {
        window.addEventListener('scroll', changeBottom);
        return () => window.removeEventListener('scroll', changeBottom);
    }, [])

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
                setData([...data, ...res.data.data])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [pathname,paramsId,idPagenate])

    return (
        <div className={styles.List}>
            { data.length <= 0 ?
                <div className={styles.notList}>
                    検索結果が見つかりませんでした
                </div>
                :
                <div>
                    { data.map((item,index) => {
                        return(
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
                            </Link>
                        )
                    }) }
                </div>
            }

        </div>
    )
}

