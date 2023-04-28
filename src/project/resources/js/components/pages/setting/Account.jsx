import SideHeader from '../../templates/setting/SideHeader'
import styles from '../../../../../public/scss/pages/setting.module.scss'

// アカウント設定
export default function Account() {
    return (
        <div className={styles.setting}>

            {/* 設定項目 */}
            <SideHeader />

            Account
        </div>
    )
}
