// スタイル
import styles from '../../../../../public/scss/parts/header.module.scss'

// header ログインユーザ　アイコン
export default function Icon() {
    return (
        <div className={styles.icon}>
            <img src="https://start-nerve.jp/wp-content/uploads/2021/05/kDPQYANH_400x400-400x360.jpg" alt="アイコン" />
        </div>
    )
}
