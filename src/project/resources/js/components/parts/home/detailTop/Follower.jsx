import styles from '../../../../../../public/scss/parts/home.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// いいねの合計数
export default function Follower() {
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
                    1111,111
                </div>
            </div>

        </div>
    )
}
