import QuestionDetailApi from "../../../api/get/like/QuestionDetailApi"
import styles from '../../../../../../public/scss/parts/question.module.scss'

// 質問詳細　サブ
export default function QuestionSubDetail() {

    const apiData = QuestionDetailApi()

    return (
        <div className={styles.detailSub}>
            <div className={styles.subjectLink}>
                数学
            </div>
            <div className={styles.courseLink}>
                数学A
            </div>
        </div>
    )
}
