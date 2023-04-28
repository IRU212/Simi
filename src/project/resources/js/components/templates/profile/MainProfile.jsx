import React from 'react'

import styles from '../../../../../public/scss/templates/profile.module.scss'

import BackImage from '../../parts/profile/BackImage'
import IconImage from '../../parts/profile/IconImage'
import Name from '../../parts/profile/Name'

// プロフィールユーザ情報
export default function MainProfile() {
    return (
        <div className={styles.mainProfile}>

            {/* プロフィール背景画像 */}
            <BackImage />

            <section>

                {/* プロフィールアイコン画像 */}
                <div className={styles.icon}>
                    <IconImage />
                </div>

                {/* ユーザ名 */}
                <div className={styles.name}>
                    <Name />
                </div>

            </section>

        </div>
    )
}
