import styles from '../../../../../public/scss/parts/profile.module.scss'

// コンポネート呼び出し
import ProfileUserApi from '../../api/get/ProfileUserApi'

// ユーザプロフィール情報　アイコン
export default function IconImage() {

    // プロフィール情報 API 取得
    const apiData = ProfileUserApi()

    return (
        <div className={styles.iconImage}>
            { apiData?.icon_image == null ?
                ""
                :
                <img src={`${apiData?.icon_image}`} alt="背景画像" />
            }
        </div>
    )
}
