import { useEffect, useState } from 'react'

// スタイル呼び出し
import styles from '../../../../../public/scss/parts/record.module.scss'

// 時間計測[parts]
export default function TimeRecord() {

    // タイマー時刻　リスト
    const [hourCount,setHourCount] = useState(0)
    const [minutesCount,setMinutesCount] = useState(0)
    const [secondsCount,setSecondsCount] = useState(0)

    // リロード時に一回実行
    useEffect(() => {

        // 1秒ごとに実行
        const interval = setInterval(() => {

            // 秒数に一秒足す
            setSecondsCount(c => c + 1)

        },1000)

        // 一定間隔ごとに実行する処理を解除
        // このメソッドがないとタイマーがバグる
        return () => clearInterval(interval)

    },[])

    // 秒数が足されるたびに実行
    useEffect(() => {

        // 秒数が60秒になったら1分ずつ追加
        if (secondsCount == 60) {

            // 秒数を0に戻す
            setSecondsCount(0)

            // 1分タイマーを足す
            setMinutesCount(minutesCount + 1)
        }

        // 分数が60分になったら1時間ずつ追加
        if (minutesCount == 60) {

            // 秒数を0に戻す
            setMinutesCount(0)

            // 1分タイマーを足す
            setHourCount(hourCount + 1)
        }

    },[secondsCount])

    return (
        <div className={styles.timerecord}>

            <div>
                { hourCount } : { minutesCount } : { secondsCount }
            </div>

            <div className={styles.buttonCover}>
                <div>
                    START
                </div>
                <div>
                    STOP
                </div>
            </div>

        </div>
    )
}
