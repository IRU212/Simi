import styles from '../../../../../../public/scss/parts/home.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashbordApi from '../../../api/get/DashbordApi';

// いいねの合計数
export default function Follower() {

    // api取得
    const apiData = DashbordApi()

    return (
        <div className={styles.detailTopItem}>

            <div className={styles.contentDetail}>
                <AccountCircleIcon className={styles.icon} />
                <div className={styles.name}>
                    FOLLOW
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.number}>
                    { apiData?.follow }
                </div>
            </div>

        </div>
    )
}
