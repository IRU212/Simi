import styles from '../../../../../public/scss/parts/profile.module.scss'

// コンポネート呼び出し
import ProfileUserApi from '../../api/get/ProfileUserApi'

// ユーザプロフィール情報　背景画像
export default function BackImage() {

    // プロフィール情報 API 取得
    const apiData = ProfileUserApi()

    return (
        <div className={styles.backImage}>
            { apiData == false ?
                ""
                :
                <img src="https://prtimes.jp/i/30865/238/origin/d30865-238-463172-2.png" alt="背景画像" />
            }
        </div>
    )
}
