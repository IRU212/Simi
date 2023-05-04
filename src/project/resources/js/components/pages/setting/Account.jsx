import SideHeader from '../../templates/setting/SideHeader'
import Auth from '../../templates/setting/acount/Auth'

import styles from '../../../../../public/scss/pages/setting.module.scss'

// アカウント設定
export default function Account() {
    return (
        <div className={styles.setting}>

            {/* 設定項目 */}
            <SideHeader />

            {/* アカウント設定 */}
            <Auth />

        </div>
    )
}
