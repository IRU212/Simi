import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

// スタイル
import styles from '../../../../../public/scss/parts/header.module.scss'
import LoginUserApi from '../../api/get/LoginUserApi'

export default function Link() {

    // apiデータ取得
    const loginData = LoginUserApi()

    // ドロワーメニュー表示判定
    const [isDrower,setIsDrower] = useState(false)

    const DrowerClick = (e) => {
        if (e.target == e.currentTarget) {
            setIsDrower(false)
        }
    }

    return (
        <>
            <div div className={styles.link}>
                <section>
                    <RouterLink to="/search">
                        検索
                    </RouterLink>
                </section>
                <section>
                    <RouterLink to={`/record`}>
                        記録
                    </RouterLink>
                </section>
                <section>
                    <RouterLink to="/question">
                        質問
                    </RouterLink>
                </section>
                <section>
                    <RouterLink to="/setting">
                        設定
                    </RouterLink>
                </section>
            </div>

            <div className={styles.humbergerMenu} onClick={() => setIsDrower(!isDrower)}>
                <section></section>
                <section></section>
                <section></section>
            </div>

            {/* ドロワーメニュー */}
            { isDrower ?
                <div className={styles.drowerBackCover} onClick={(e) => DrowerClick(e)}>

                    <div className={styles.drowerCover}>
                        <div className={styles.titleLink}>
                            リンク
                        </div>
                        <section>
                            <RouterLink to="/search">
                                検索
                            </RouterLink>
                        </section>
                        <section>
                            <RouterLink to={`/record`}>
                                記録
                            </RouterLink>
                        </section>
                        <section>
                            <RouterLink to="/question">
                                質問
                            </RouterLink>
                        </section>
                        <section>
                            <RouterLink to="/setting">
                                設定
                            </RouterLink>
                        </section>
                    </div>
                </div>
                :
                ""
            }
        </>
    )
}
