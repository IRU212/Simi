import React from 'react'
import BackImage from '../../parts/profile/BackImage'
import IconImage from '../../parts/profile/IconImage'

// プロフィールユーザ情報
export default function MainProfile() {
    return (
        <div>

            {/* プロフィール背景画像 */}
            <BackImage />

            {/* プロフィールアイコン画像 */}
            <IconImage />

        </div>
    )
}
