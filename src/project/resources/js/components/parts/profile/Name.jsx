import styles from '../../../../../public/scss/parts/profile.module.scss'

// コンポネート呼び出し
import ProfileUserApi from '../../api/get/ProfileUserApi'

// ユーザプロフィール情報　名前
export default function Name() {

    // プロフィール情報 API 取得
    const apiData = ProfileUserApi()

    return (
        <div className={styles.name}>
            { apiData?.name }
        </div>
    )
}
