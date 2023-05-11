import { useState } from 'react'
import styles from '../../../../../../public/scss/parts/home.module.scss'

// 行動内容表示する日付
export default function DateData() {

    // 現在の日付を取得
    const nowDateFormat = new Date()
    const nowYear = nowDateFormat.getFullYear()
    const nowMonth = nowDateFormat.getMonth() + 1
    const nowDate = nowDateFormat.getDate()

    // 表示する日付
    const [year,setYear] = useState(nowYear) // 年
    const [month,setMonth] = useState(nowMonth) // 月
    const [date,setDate] = useState(nowDate) // 日

    return (
        <div className={styles.date}>
            <div className={styles.mainDate}>
                { year } / { month } / { date }
            </div>
        </div>
    )
}
