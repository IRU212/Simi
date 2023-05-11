import styles from '../../../../public/scss/pages/profile.module.scss'
import MainProfile from '../templates/profile/MainProfile'
import QuestionList from '../templates/profile/QuestionList'

// プロフィールページ
export default function Profile() {
    return (
        <div className={styles.profile}>

            {/* プロフィールユーザ情報 */}
            <MainProfile />

            <div className={styles.content}>

                {/* ユーザ投稿一覧 */}
                <QuestionList />

            </div>

        </div>
    )
}
