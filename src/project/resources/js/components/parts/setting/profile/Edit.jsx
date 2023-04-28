import React from 'react'
import styles from '../../../../../../public/scss/parts/setting.module.scss'

// コンポネート呼び出し
import LoginUserApi from '../../../api/get/LoginUserApi'

export default function Edit() {

    const loginData = LoginUserApi()

    return (
        <>
            <div className={styles.edit}>

                {/* 背景画像 */}
                <div className={styles.backImage}>
                    <img src="https://prtimes.jp/i/30865/238/origin/d30865-238-463172-2.png" alt="背景画像" />
                </div>

                {/* プロフィール情報 */}
                <section>

                    <div className={styles.iconImage}>
                        <img src="https://start-nerve.jp/wp-content/uploads/2021/05/kDPQYANH_400x400-400x360.jpg" alt="アイコン" />
                    </div>

                    <div className={styles.name}>
                        { loginData?.name }
                    </div>

                    <div className={styles.nameChange}>
                        名前を変更
                    </div>

                </section>

            </div>

            <div className={styles.SaveButton}>
                保存
            </div>
        </>
    )
}
