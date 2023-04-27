import { Link } from 'react-router-dom'

// スタイル
import styles from '../../../../../public/scss/parts/header.module.scss'

// コンポネート呼び出し
import LoginUserApi from '../../api/get/LoginUserApi'

// header ログインユーザ　アイコン
export default function Icon() {

    const loginData = LoginUserApi()

    return (
        <>
            { loginData == false ?
                <Link to={`/login`} className={styles.icon}>
                    <img src="https://start-nerve.jp/wp-content/uploads/2021/05/kDPQYANH_400x400-400x360.jpg" alt="アイコン" />
                </Link>
                :
                <Link to={`/profile/${loginData?.id}`} className={styles.icon}>
                    <img src="https://start-nerve.jp/wp-content/uploads/2021/05/kDPQYANH_400x400-400x360.jpg" alt="アイコン" />
                </Link>
            }
        </>
    )
}
