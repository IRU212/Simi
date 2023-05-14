import { Link } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// スタイル
import styles from '../../../../../public/scss/parts/header.module.scss'

// コンポネート呼び出し
import LoginUserApi from '../../api/get/LoginUserApi'

export default function Name() {

    // apiデータ取得
    const loginData = LoginUserApi()

    return (
        <div className={styles.name}>
            { loginData == false ?
                "aaaaa"
                :
                <Link to={`/profile/${loginData?.id}`}>
                    { loginData?.name }
                </Link>
            }
        </div>
    )
}
