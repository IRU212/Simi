import styles from '../../../../../public/scss/parts/profile.module.scss'

// コンポネート呼び出し
import ProfileUserApi from '../../api/get/ProfileUserApi'

// ユーザプロフィール情報　背景画像
export default function BackImage() {

    // プロフィール情報 API 取得
    const apiData = ProfileUserApi()

    return (
        <div className={styles.backImage}>
            { apiData?.back_image == null ?
                ""
                :
                <img src={`${apiData?.back_image}`} alt="背景画像" />
            }
        </div>
    )
}
