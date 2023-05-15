import React, { useCallback, useEffect, useState } from 'react'
import styles from '../../../../../public/scss/parts/question.module.scss'
import { Link, useParams } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// 質問一覧表示
export default function List() {

    // Apiデータ取得
    const [data,setData] = useState([])

    // 次のデータ取得判定
    const [nextPage,setNextPage] = useState()

    // ドメイン以降のURLを取得
    const pathname = window.location.pathname

    // 前のURLを取得
    const [urlHistory,setUrlHistory] = useState(pathname)

    // パラメータを取得
    const paramsId = useParams()['id']

    // 初期ページネイトページ数
    const [idPagenate,setIdPagenate] = useState(1)

    // URLが変更されるたびに実行
    useEffect(() => {

        axios
            .get(`${location.origin}/api${pathname}?page=${idPagenate}`)
            .then((res) => {

                if (urlHistory == pathname) {

                    //タイマー処理 3秒後に実行
                    setTimeout(() => {

                        setData([...data, ...res.data.data]) // 表示リスト取得
                        setNextPage(res.next_page_url) // 次にページがあるか取得　ない場合は null

                    }, 0);

                } else {

                    setData(res.data.data) // 新規ページ　表示リスト取得
                    setIdPagenate(1) // ページ番号を1にリセット
                    setUrlHistory(pathname)

                }

            })
            .catch((err) => {
                console.log(err)
            })
    }, [pathname,paramsId,idPagenate])

    // スクロールするたびに実行
    const changeBottom = useCallback(() => {

        // スクロール位置を取得
        const bottomPosition = document.body.offsetHeight - (window.scrollY + window.innerHeight);

        // スクロール位置が10以下になったら発火
        if (bottomPosition < 0 && bottomPosition !== null) {
            setIdPagenate(idPagenate + 1)
        }

    }, []);

    // リロード時にスクロールイベントを呼び出し
    // スクロールするたびにchnageBottomを実行
    useEffect(() => {
        window.addEventListener('scroll', changeBottom);
        return () => window.removeEventListener('scroll', changeBottom);
    }, [])

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

