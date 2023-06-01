import { useEffect, useState } from 'react'
import styles from '../../../../../public/scss/parts/question.module.scss'
import { Link, NavLink } from 'react-router-dom'

export default function Subject() {

    // 質問ジャンルおすすめ含む取得
    const [url,setUrl] = useState("")

    // 元URL以降のURLを取得
    const urlPath = window.location.pathname

    // URLのID以外を取得
    const urlName = urlPath.slice(0,-2)

    // 質問のジャンルを取得
    const urlGanre = urlName.split("/")[3]

    // useEffectでリクエストが多くなり
    // エラーになるのを防止
    useEffect(() => {

        // undifindはジャンルのおすすめ
        if (urlGanre == undefined) {
            setUrl("/question/subject")
        } else {
            setUrl(`/question/subject${urlGanre}`)
        }

    },[urlPath])

    return (
        <div className={styles.subject}>

            <div className={styles.titleMain}>
                教科
            </div>

            <NavLink
                className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                to={`${url}/1`}
            >
                国語
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                to={`${url}/2`}
            >
                数学
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                to={`${url}/3`}
            >
                理科
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                to={`${url}/4`}
            >
                社会
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                to={`${url}/5`}
            >
                英語
            </NavLink>

        </div>
    )
}
