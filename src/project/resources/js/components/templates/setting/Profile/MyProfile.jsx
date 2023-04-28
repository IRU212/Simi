import React from 'react'
import Edit from '../../../parts/setting/profile/Edit'

import styles from '../../../../../../public/scss/templates/setting.module.scss'

// 設定プロフィール編集
export default function MyProfile() {
    return (
        <div className={styles.myProfile}>

            <div className={styles.title}>
                プロフィール編集
            </div>

            {/* プロフィール編集 */}
            <Edit />

        </div>
    )
}
