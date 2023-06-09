import { useEffect, useState } from 'react'

// スタイル呼び出し
import styles from '../../../../../public/scss/parts/record.module.scss'

// 時間計測[parts]
export default function TimeRecord() {

    // タイマー時刻　リスト
    const [hourCount,setHourCount] = useState(0)
    const [minutesCount,setMinutesCount] = useState(0)
    const [secondsCount,setSecondsCount] = useState(0)

    // タイマー実行判定
    const [time,setTime] = useState(false)

    // リセット・ストップボタン表示判定
    const [resetButton,setResetButton] = useState(true)

    // リロード時に一回実行
    useEffect(() => {

        // 1秒ごとに実行
        const interval = setInterval(() => {

            if (time) {
                // 秒数に一秒足す
                setSecondsCount(c => c + 1)
            }

        },1000)

        // 一定間隔ごとに実行する処理を解除
        // このメソッドがないとタイマーがバグる
        return () => clearInterval(interval)

    },[time])

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

    // クリックしたらタイマー実行
    const StartClick = () => {
        setTime(true)
    }

    // クリックしたらタイマーをリセット
    const ResetClick = () => {
        setHourCount(0)
        setMinutesCount(0)
        setSecondsCount(0)
        setResetButton(true) // ストップ・リセットボタン切り替え
    }

    // クリックしたらタイマー止める
    const StopClick = () => {
        setTime(false)
        setResetButton(false) // ストップ・リセットボタン切り替え
    }

    return (
        <div className={styles.timerecord}>

            <div className={styles.mainTime}>
                { hourCount } : { minutesCount } : { secondsCount }
            </div>

            <div className={styles.buttonCover}>
                <div onClick={StartClick} className={styles.startButton}>
                    <p>
                        START
                    </p>
                </div>
                { resetButton ?
                    <div onClick={StopClick} className={styles.stopButton}>
                        <p>
                            STOP
                        </p>
                    </div>
                    :
                    <div onClick={ResetClick} className={styles.startButton}>
                        <p>
                            RESET
                        </p>
                    </div>
                }
            </div>

        </div>
    )
}
