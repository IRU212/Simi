import styles from '../../../../../public/scss/templates/home.module.scss'

import Like from '../../parts/home/detailTop/Like'
import Follower from '../../parts/home/detailTop/Follower'
import Question from '../../parts/home/detailTop/Question'

// さまざまな情報
export default function DetailTop() {
    return (
        <div className={styles.detailTop}>

            {/* 質問数情報 */}
            <Question />

            {/* フォロワー数情報 */}
            <Follower />

            {/* いいね数情報 */}
            <Like />

        </div>
    )
}
