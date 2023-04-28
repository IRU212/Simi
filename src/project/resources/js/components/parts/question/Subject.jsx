import styles from '../../../../../public/scss/parts/question.module.scss'
import { Link } from 'react-router-dom'

export default function Subject() {
    return (
        <div className={styles.subject}>

            <div className={styles.titleMain}>
                教科
            </div>

            <Link to="/question/national">
                国語
            </Link>
            <Link to="/question/math">
                数学
            </Link>
            <Link to="/question/science">
                理科
            </Link>
            <Link to="/question/society">
                社会
            </Link>
            <Link to="/question/english">
                英語
            </Link>

        </div>
    )
}
