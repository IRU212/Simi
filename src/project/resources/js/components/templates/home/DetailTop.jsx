import React from 'react'
import Like from '../../parts/home/detailTop/Like'
import styles from '../../../../../public/scss/templates/home.module.scss'
import Follower from '../../parts/home/detailTop/Follower'

// さまざまな情報
export default function DetailTop() {
    return (
        <div className={styles.detailTop}>

            {/* いいね数情報 */}
            <Like />

            {/* フォロワー数情報 */}
            <Follower />

            {/* いいね数情報 */}
            <Like />

            {/* フォロワー数情報 */}
            <Follower />

        </div>
    )
}
