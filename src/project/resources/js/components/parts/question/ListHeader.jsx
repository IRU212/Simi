import { NavLink, useParams } from 'react-router-dom'

import styles from '../../../../../public/scss/parts/question.module.scss'

export default function ListHeader() {

    const paramsId = useParams()['id']

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
                to={`/question/subject/${paramsId}/follow`}
            >
                フォロー
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? styles.NowUrlLink : undefined)}
                to={`/question/subject/${paramsId}/latest`}
            >
                最新
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? styles.NowUrlLink : undefined)}
                to={`/question/subject/${paramsId}/evaluation`}
            >
                評価
            </NavLink>

        </div>
    )
}
