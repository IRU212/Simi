import styles from '../../../../public/scss/pages/home.module.scss'
import DateAction from '../templates/home/DateAction'
import DetailTop from '../templates/home/DetailTop'
import Schedule from '../templates/home/Schedule'

export default function Home() {
    return (
        <div className={styles.home}>

            {/* スケジュール表 */}
            {/* <Schedule /> */}

            {/* メインコンテンツ */}
            <section>

                {/* トップ細かい情報(いいね・フォロワーなど) */}
                <DetailTop />

                {/* 行動内容 */}
                <DateAction />

            </section>

        </div>
    )
}
