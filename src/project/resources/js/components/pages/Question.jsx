import React from 'react'

import styles from '../../../../public/scss/pages/question.module.scss'

import SideHeader from '../templates/question/SideHeader'
import QuestionList from '../templates/question/QuestionList'

// 質問ページ　全体
export default function Question() {
    return (
        <div className={styles.question}>

            {/* サイドヘッダー */}
            <SideHeader />

            {/* 質問一覧 */}
            <QuestionList />

        </div>
    )
}
