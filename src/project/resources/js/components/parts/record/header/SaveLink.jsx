import styles from '../../../../../../public/scss/parts/record.module.scss'
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// 記録保存リンク
export default function SaveLink() {
    return (
        <Link to="/record/save" className={styles.link}>
            <div>
                勉強を記録する
            </div>
            <div>
                <ArrowForwardIosIcon />
            </div>
        </Link>
    )
}
