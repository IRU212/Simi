import styles from '../../../../../public/scss/templates/record.module.scss'
import SubTitle from '../../parts/record/SubTitle'
import BookRanking from '../../parts/record/graph/BookRanking'
import StudyTime from '../../parts/record/graph/StudyTime'

// グラフ
export default function Graph() {
    return (
        <div className={styles.graph}>

            {/* 参考書サブタイトル */}
            <SubTitle name={"よく使う参考書"} />

            {/* 参考書一覧 */}
            <BookRanking />

            {/* 勉強時間サブタイトル */}
            <SubTitle name={"勉強時間"} />

            {/* 勉強時間グラフ */}
            <StudyTime />

        </div>
    )
}
