import styles from '../../../../../public/scss/parts/profile.module.scss'

// コンポネート呼び出し
import ProfileUserApi from '../../api/get/ProfileUserApi'

// フォロー・フォロワー数
export default function FollowCount() {

    // プロフィール情報 API 取得
    const apiData = ProfileUserApi()

    return (
        <div className={styles.followCountCover}>
            <div>
                { apiData?.follow_count }follow
            </div>
            <div>
            { apiData?.follower_count }follower
            </div>
        </div>
    )
}
