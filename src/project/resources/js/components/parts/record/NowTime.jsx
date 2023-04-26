import { useState } from "react"

// スタイル呼び出し
import styles from '../../../../../public/scss/parts/record.module.scss'

// 現在時刻取得[parts]
export default function NowTime() {

    // 時刻メソッドを呼び出し
    const time = new Date()

    // 現在時刻取得
    const hour = time.getHours() // 時
    const minutes = time.getMinutes() // 分
    const seconds = time.getSeconds() // 秒

    // 非同期時間計算用
    const [hourCount,setHourCount] = useState(hour)
    const [minutesCount,setMinutesCount] = useState(minutes)
    const [secondsCount,setSecondsCount] = useState(seconds)

    // 一秒ごとに実行
    setInterval(() => {

        // 時刻メソッドを呼び出し
        const nowTime = new Date()

        // 1秒ごとに時間を代入
        setHourCount(nowTime.getHours())
        setMinutesCount(nowTime.getMinutes())
        setSecondsCount(nowTime.getSeconds())

    }, 1000);

    return (
        <div className={styles.nowtime}>
            { hourCount } : { minutesCount } : { secondsCount }
        </div>
    )
}
