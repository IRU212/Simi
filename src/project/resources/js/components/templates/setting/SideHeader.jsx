import SettingHeader from '../../parts/setting/SettingHeader'
import styles from '../../../../../public/scss/templates/setting.module.scss'

// 設定　項目　サイドヘッダー
export default function SideHeader() {
    return (
        <div className={styles.sideHeader}>

            {/* 設定項目リンク */}
            <SettingHeader />
        </div>
    )
}
