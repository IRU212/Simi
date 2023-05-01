import { Link as RouterLink } from 'react-router-dom'

// スタイル
import styles from '../../../../../public/scss/parts/header.module.scss'

export default function Link() {
    return (
        <div className={styles.link}>

            <section>
                <RouterLink to="/search">
                    検索
                </RouterLink>
            </section>
            <section>
                <RouterLink to="/record">
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
    )
}
