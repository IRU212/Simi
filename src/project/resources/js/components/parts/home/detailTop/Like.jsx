import styles from '../../../../../../public/scss/parts/home.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';

// いいねの合計数
export default function Like() {
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
                    1111,111
                </div>
            </div>

        </div>
    )
}
