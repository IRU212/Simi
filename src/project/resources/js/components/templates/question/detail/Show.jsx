import QuestionDetail from "../../../parts/question/detail/QuestionDetail";

import styles from '../../../../../../public/scss/templates/question.module.scss'
import QuestionSubDetail from "../../../parts/question/detail/QuestionSubDetail";
import ReplyForm from "../../../parts/question/detail/ReplyForm";
import ReplyList from "../../../parts/question/detail/ReplyList";

// 質問詳細
export default function Show() {
    return (
        <div className={styles.detail}>

            {/* 質問詳細 */}
            <QuestionDetail />

            {/* 質問詳細サブ */}
            <QuestionSubDetail />

            {/* 質問返信 */}
            <ReplyForm />

            {/* 返信一覧 */}
            <ReplyList />

        </div>
    )
}
