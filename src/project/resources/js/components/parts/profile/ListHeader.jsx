import { NavLink, useParams } from 'react-router-dom'

import styles from '../../../../../public/scss/parts/profile.module.scss'
import { useEffect, useState } from 'react'

// プロフィール　質問リスト　ヘッダー
export default function ListHeader() {

    // home判定用変数
    const [homeUrl,setHomeUrl] = useState(false)

    // パラメータを取得
    const paramsId = useParams()['id']

    // urlが変更されるたびに実行
    useEffect(() => {
        if (window.location.pathname == "/question") {
            setHomeUrl(true)
        } else {
            setHomeUrl(false)
        }
    },[window.location.pathname])

    return (
        <div className={styles.listHeader}>

            <div className={styles.item}>
                質問一覧
            </div>

        </div>
    )
}
