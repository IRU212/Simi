import styles from '../../../../../public/scss/parts/question.module.scss'
import { Link } from 'react-router-dom'

export default function Subject() {
    return (
        <div className={styles.subject}>

            <div className={styles.titleMain}>
                教科
            </div>

            <Link to="/question/subject/1">
                国語
            </Link>
            <Link to="/question/subject/2">
                数学
            </Link>
            <Link to="/question/subject/3">
                理科
            </Link>
            <Link to="/question/subject/4">
                社会
            </Link>
            <Link to="/question/subject/5">
                英語
            </Link>

        </div>
    )
}
