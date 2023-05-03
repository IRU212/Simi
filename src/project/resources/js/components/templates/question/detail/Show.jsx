import QuestionDetail from "../../../parts/question/detail/QuestionDetail";

import styles from '../../../../../../public/scss/templates/question.module.scss'

// 質問詳細
export default function Show() {
    return (
        <div className={styles.detail}>

            {/* 質問詳細 */}
            <QuestionDetail />
        </div>
    )
}
