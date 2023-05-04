import QuestionDetailApi from "../../../api/get/like/QuestionDetailApi"
import styles from '../../../../../../public/scss/parts/question.module.scss'

// 質問詳細　サブ
export default function QuestionSubDetail() {

    // API受け取り
    const apiData = QuestionDetailApi()

    // 教科を科目がnullだったら非表示
    if (apiData?.subject == null && apiData?.course == null) {
        return(
            <div></div>
        )
    } else {
        return (
            <div className={styles.detailSub}>
                { apiData?.subject == null ?
                    ""
                    :
                    <div className={styles.subjectLink}>
                        { apiData?.subject }
                    </div>
                }
                { apiData?.course == null ?
                    ""
                    :
                    <div className={styles.courseLink}>
                        { apiData?.course }
                    </div>
                }
            </div>
        )
    }
}
