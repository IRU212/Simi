import styles from '../../../../../../public/scss/templates/setting.module.scss'
import Logout from '../../../parts/setting/account/Logout'

export default function Auth() {
    return (
        <div className={styles.settingMain}>

            <div className={styles.title}>
                アカウント
            </div>

            {/* ログアウト機能 */}
            <Logout />

        </div>
    )
}
