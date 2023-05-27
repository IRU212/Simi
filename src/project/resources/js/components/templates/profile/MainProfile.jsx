import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from '../../../../../public/scss/templates/profile.module.scss'

import LoginUserApi from '../../api/get/LoginUserApi'

import BackImage from '../../parts/profile/BackImage'
import IconImage from '../../parts/profile/IconImage'
import Name from '../../parts/profile/Name'
import Follow from '../../parts/profile/Follow'
import SettingButton from '../../parts/profile/SettingButton'
import FollowCount from '../../parts/profile/FollowCount';

// プロフィールユーザ情報
export default function MainProfile() {

    // ログインAPIデータ取得
    const apiData = LoginUserApi()

    // パラメータ取得
    const id = useParams()['id']

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

                {/* フォロー・フォロワー */}
                <div className={styles.followCount}>
                    <FollowCount />
                </div>

                {/* プロフィールidとログインidが一致なかったらフォロー表示 */}
                { id == apiData?.id ?
                    // プロフィール編集ボタン
                    <div className={styles.setting}>
                        <SettingButton />
                    </div>
                    :
                    // フォロー
                    <div className={styles.follow}>
                        <Follow />
                    </div>
                }

            </section>

        </div>
    )
}
