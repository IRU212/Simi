import { Link } from 'react-router-dom'
import styles from '../../../../../public/scss/parts/setting.module.scss'

// 設定ヘッダー項目
export default function SettingHeader() {
    return (
        <div className={styles.settingHeader}>

            <section>

                <div className={styles.title}>ユーザ設定</div>

                <Link to="/setting">
                    アカウント情報
                </Link>
                <Link to="/setting/profile">
                    プロフィール編集
                </Link>

            </section>

            <section>

                <div className={styles.title}>アプリ設定</div>

                <Link to="/setting/privacy">
                    プライバシー
                </Link>

            </section>

        </div>
    )
}
