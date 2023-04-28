import { NavLink, useParams } from 'react-router-dom'

import styles from '../../../../../public/scss/parts/question.module.scss'
import { useEffect, useState } from 'react'

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

    if (paramsId == undefined) {
        return (
            <div className={styles.listHeader}>

                <NavLink
                    className={`${homeUrl ? styles.NowUrlLink : ""}`}
                    to={`/question`}
                >
                    おすすめ
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.NowUrlLink : undefined)}
                    to={`/question/follow`}
                >
                    フォロー
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.NowUrlLink : undefined)}
                    to={`/question/latest`}
                >
                    最新
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.NowUrlLink : undefined)}
                    to={`/question/evaluation`}
                >
                    評価
                </NavLink>

            </div>
        )
    } else {
        return (
            <div className={styles.listHeader}>

                <NavLink
                    className={({ isActive }) => (isActive ? styles.NowUrlLink : undefined)}
                    to={`/question/subject/${paramsId}`}
                >
                    おすすめ
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.NowUrlLink : undefined)}
                    to={`/question/subject/follow/${paramsId}`}
                >
                    フォロー
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.NowUrlLink : undefined)}
                    to={`/question/subject/latest/${paramsId}`}
                >
                    最新
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.NowUrlLink : undefined)}
                    to={`/question/subject/evaluation/${paramsId}`}
                >
                    評価
                </NavLink>

            </div>
        )
    }
}
