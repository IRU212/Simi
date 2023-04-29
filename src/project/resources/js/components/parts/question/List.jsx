import React, { useEffect, useState } from 'react'
import styles from '../../../../../public/scss/parts/question.module.scss'
import { Link } from 'react-router-dom'

export default function List() {

    // Apiデータ取得
    const [data,setData] = useState([])

    // ドメイン以降のURLを取得
    const pathname = window.location.pathname

    // 初期ページネイトページ数
    const [idPagenate,setIdPagenate] = useState(1)

    // URLが変更されるたびに実行
    useEffect(() => {
        axios
            .get(`http://localhost:8081/api/question/latest?page=${idPagenate}`)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [pathname])

    return (
        <div className={styles.List}>
            { data.map((item,index) =>
                <div className={styles.questionItem} key={index}>
                    <Link to={`/profile/${item.user_id}`} className={styles.icon}>
                        <img src="https://start-nerve.jp/wp-content/uploads/2021/05/kDPQYANH_400x400-400x360.jpg" alt="アイコン" />
                    </Link>
                    <div className={styles.main}>
                        <div className={styles.title}>
                            { item.name }
                        </div>
                        <div>
                            { item.body }
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
