import styles from '../../../../../../public/scss/parts/home.module.scss'
import HelpIcon from '@mui/icons-material/Help';
import DashbordApi from '../../../api/get/DashbordApi';

// 質問の合計数
export default function Question() {

    // api取得
    const apiData = DashbordApi()

    return (
        <div className={styles.detailTopItem}>

            <div className={styles.contentDetail}>
                <HelpIcon className={styles.icon} />
                <div className={styles.name}>
                    QUESTION
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.number}>
                    { apiData?.question }
                </div>
            </div>

        </div>
    )
}
