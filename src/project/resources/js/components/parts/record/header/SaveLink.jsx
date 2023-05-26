import styles from '../../../../../../public/scss/parts/record.module.scss'
import { Link } from 'react-router-dom'

// 記録保存リンク
export default function SaveLink() {
    return (
        <Link to="/record/save" className={styles.link}>
            勉強を記録する
        </Link>
    )
}
