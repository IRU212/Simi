import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import styles from '../../../../../public/scss/parts/search.module.scss'

export default function ListHeader() {

    // home判定用変数
    const [homeUrl,setHomeUrl] = useState(false)

    // パラメータを取得
    const paramsId = useParams()['id']

    // urlが変更されるたびに実行
    useEffect(() => {
        if (window.location.pathname == "/search") {
            setHomeUrl(true)
        } else {
            setHomeUrl(false)
        }
    },[window.location.pathname])


    if (paramsId == undefined) {
        return (
            <div className={styles.listHeader}>

                <NavLink
                    className={`${homeUrl ? styles.NowUrlLink : ""}`}
                    to={`/search`}
                >
                    質問
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.NowUrlLink : undefined)}
                    to={`/search/user`}
                >
                    ユーザ
                </NavLink>

            </div>
        )
    } else {
        return (
            <div className={styles.listHeader}>

                <NavLink
                    className={`${homeUrl ? styles.NowUrlLink : ""}`}
                    to={`/search`}
                >
                    質問
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.NowUrlLink : undefined)}
                    to={`/search/user`}
                >
                    ユーザ
                </NavLink>

            </div>
        )
    }
}
