import QuestionDetailApi from "../../../api/get/like/QuestionDetailApi"
import styles from '../../../../../../public/scss/parts/question.module.scss'

// 質問詳細　サブ
export default function QuestionSubDetail() {

    const apiData = QuestionDetailApi()

    return (
        <div className={styles.detailSub}>
            <div className={styles.subjectLink}>
                { apiData?.subject }
            </div>
            <div className={styles.courseLink}>
                { apiData?.course }
            </div>
        </div>
    )
}
