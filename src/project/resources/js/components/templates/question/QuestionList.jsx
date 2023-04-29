import styles from '../../../../../public/scss/templates/question.module.scss'
import List from '../../parts/question/List'
import ListHeader from '../../parts/question/ListHeader'

// 質問リスト
export default function QuestionList() {
    return (
        <div className={styles.questionList}>

            {/* 質問ヘッダー */}
            <ListHeader />

            {/* 質問一覧 */}
            <List />

        </div>
    )
}
