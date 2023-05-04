import React from 'react'
import { Link } from 'react-router-dom'

// スタイル
import styles from '../../../../../public/scss/parts/header.module.scss'

export default function TopLink() {
    return (
        <Link to="/" className={styles.topLink}>
            SIMI
        </Link>
    )
}
