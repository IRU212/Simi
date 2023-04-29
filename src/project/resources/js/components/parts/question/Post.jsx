import styles from '../../../../../public/scss/parts/question.module.scss'
import { Link } from 'react-router-dom'

export default function Post() {
    return (
        <div className={styles.item}>

            <div className={styles.titleMain}>
                投稿
            </div>

            <Link to="/question/create">
                質問
            </Link>

        </div>
    )
}
