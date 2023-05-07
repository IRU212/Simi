import styles from '../../../../../../public/scss/parts/home.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DashbordApi from '../../../api/get/DashbordApi';

// いいねの合計数
export default function Like() {

    // api取得
    const apiData = DashbordApi()

    return (
        <div className={styles.detailTopItem}>

            <div className={styles.contentDetail}>
                <FavoriteIcon className={styles.icon} />
                <div className={styles.name}>
                    LIKE
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.number}>
                    { apiData?.like }
                </div>
            </div>

        </div>
    )
}
