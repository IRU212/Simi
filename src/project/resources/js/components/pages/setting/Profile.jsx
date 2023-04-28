import SideHeader from '../../templates/setting/SideHeader'
import styles from '../../../../../public/scss/pages/setting.module.scss'

// プロフィール設定
export default function Profile() {
    return (
        <div className={styles.setting}>

            {/* 設定項目 */}
            <SideHeader />

        </div>
    )
}
