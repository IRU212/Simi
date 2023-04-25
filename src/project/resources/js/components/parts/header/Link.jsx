import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

// スタイル
import styles from '../../../../../public/scss/parts/header.module.scss'

export default function Link() {
    return (
        <div className={styles.link}>

            <section>
                <RouterLink to="/">
                    Home
                </RouterLink>
            </section>
            <section>
                <RouterLink to="/study">
                    Study
                </RouterLink>
            </section>
            <section>
                <RouterLink to="/record">
                    Record
                </RouterLink>
            </section>
            <section>
                <RouterLink to="/question">
                    Question
                </RouterLink>
            </section>
            <section>
                <RouterLink to="/setting">
                    Setting
                </RouterLink>
            </section>

        </div>
    )
}
