import { Link } from 'react-router-dom'

// スタイル
import styles from '../../../../../public/scss/parts/header.module.scss'

// コンポネート呼び出し
import LoginUserApi from '../../api/get/LoginUserApi'

// ユーザ名表示
export default function Name() {

    // apiデータ取得
    const loginData = LoginUserApi()

    return (
        <div className={styles.name}>
            { loginData == false ?
                <Link to={`/login`} >
                    ログイン
                </Link>
                :
                <Link to={`/profile/${loginData?.id}`}>
                    { loginData?.name }
                </Link>
            }
        </div>
    )
}
