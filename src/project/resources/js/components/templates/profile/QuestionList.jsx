import styles from '../../../../../public/scss/templates/profile.module.scss'
import List from '../../parts/profile/List'
import ListHeader from '../../parts/profile/ListHeader'

// プロフィールユーザの投稿一覧
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
