import React from 'react'
import Show from '../../templates/question/detail/Show'

import styles from '../../../../../public/scss/pages/question.module.scss'

// 質問詳細ページ
export default function Detail() {
    return (
        <div className={styles.detail}>

            {/* 質問詳細 */}
            <Show />
        </div>
    )
}
