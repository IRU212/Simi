import styles from '../../../../../public/scss/templates/record.module.scss'
import StudyTime from '../../parts/record/graph/StudyTime'

// グラフ
export default function Graph() {
    return (
        <div className={styles.graph}>

            {/* 勉強時間グラフ */}
            <StudyTime />

        </div>
    )
}
