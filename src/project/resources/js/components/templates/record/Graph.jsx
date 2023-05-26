import styles from '../../../../../public/scss/templates/record.module.scss'
import BookRanking from '../../parts/record/graph/BookRanking'
import StudyTime from '../../parts/record/graph/StudyTime'

// グラフ
export default function Graph() {
    return (
        <div className={styles.graph}>

            {/* 本ランキング */}
            <BookRanking />

            {/* 勉強時間グラフ */}
            <StudyTime />

        </div>
    )
}
