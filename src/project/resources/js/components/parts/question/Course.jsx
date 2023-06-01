import { useEffect, useState } from 'react'
import styles from '../../../../../public/scss/parts/question.module.scss'
import { Link, NavLink } from 'react-router-dom'

export default function Course() {

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
            setUrl("/question/course")
        } else {
            setUrl(`/question/course${urlGanre}`)
        }

    },[urlPath])

    return (
        <div className={styles.subject}>

            <div className={styles.titleMain}>
                科目
            </div>

            <section>

                <div className={styles.titleSub}>
                    国語
                </div>

                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/1`}
                >
                    国語総合
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/2`}
                >
                    国語表現
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/3`}
                >
                    現代文A
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/4`}
                >
                    現代文B
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/5`}
                >
                    古典A
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/6`}
                >
                    古典B
                </NavLink>

            </section>

            <section>

                <div className={styles.titleSub}>
                    数学
                </div>

                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/7`}
                >
                    数学1
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/8`}
                >
                    数学2
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/9`}
                >
                    数学3
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/10`}
                >
                    数学A
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/11`}
                >
                    数学B
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/12`}
                >
                    数学活用
                </NavLink>

            </section>

            <section>

                <div className={styles.titleSub}>
                    理科
                </div>

                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/13`}
                >
                    科学と人間生活
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/14`}
                >
                    物理基礎
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/15`}
                >
                    物理
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/16`}
                >
                    化学基礎
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/17`}
                >
                    科学
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/18`}
                >
                    生物基礎
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/19`}
                >
                    生物
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/20`}
                >
                    地学基礎
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/21`}
                >
                    地学
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/22`}
                >
                    理科課題研究
                </NavLink>

            </section>

            <section>

                <div className={styles.titleSub}>
                    社会
                </div>

                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/23`}
                >
                    世界史A
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/24`}
                >
                    世界史B
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/25`}
                >
                    日本史A
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/26`}
                >
                    日本史B
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/27`}
                >
                    地学A
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/28`}
                >
                    地学B
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/29`}
                >
                    現代社会
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/30`}
                >
                    論理
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/31`}
                >
                    政治・経済
                </NavLink>

            </section>

            <section>

                <div className={styles.titleSub}>
                    英語
                </div>

                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/32`}
                >
                    コミュニケーション英語基礎
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/33`}
                >
                    コミュニケーション英語1
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/34`}
                >
                    コミュニケーション英語2
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/35`}
                >
                    コミュニケーション英語3
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/36`}
                >
                    英語表現A
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/37`}
                >
                    英語表現B
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? styles.nowLink : undefined)}
                    to={`${url}/38`}
                >
                    英語会話
                </NavLink>

            </section>

        </div>
    )
}
