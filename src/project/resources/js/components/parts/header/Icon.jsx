import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// スタイル
import styles from '../../../../../public/scss/parts/header.module.scss'

// コンポネート呼び出し
import LoginUserApi from '../../api/get/LoginUserApi'

// header ログインユーザ　アイコン
export default function Icon() {

    // apiデータ取得
    const loginData = LoginUserApi()

    return (
        <>
            { loginData == false ?
                <Link to={`/login`} className={styles.icon}>
                    <AccountCircleIcon className={styles.humanIcon} />
                </Link>
                :
                <Link to={`/profile/${loginData?.id}`} className={styles.icon}>
                    { loginData?.icon_image == null ?
                        <AccountCircleIcon className={styles.humanIcon} />
                        :
                        <img src={`${loginData?.icon_image}`} alt="アイコン" />
                    }
                </Link>
            }
        </>
    )
}
