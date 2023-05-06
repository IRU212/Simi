import { useState } from 'react'
import styles from '../../../../../public/scss/parts/home.module.scss'

// カレンダーメインデザイン
export default function ScheduleMain() {

    // 曜日一覧
    const dayOfWeekList = [ "日", "月", "火", "水", "木", "金", "土" ]

    // メソッド呼び出し
    const now = new Date()

    // 現在の情報を取得
    const nowYear = now.getFullYear() // 年
    const nowMonth = now.getMonth() + 1 // 月
    const nowDate = now.getDate() // 日

    // 表示するカレンダーの日付
    const [year,setYear] = useState(nowYear) // 年
    const [month,setMonth] = useState(nowMonth) // 月
    const [date,setDate] = useState(nowDate) // 日

    // 現在の月の合計日数
    const lastDate = new Date(nowYear,nowMonth,0).getDate()

    // 現在の週の数
    const countWeek = Math.ceil(lastDate / 7)

    // 現在の月の最初の日の曜日
    const dayOfWeek = new Date(nowYear,nowMonth - 1).getDay()

    // 週のそれぞれの日にち計算
    function dayWeekEach(item,i) {
        return ( item + 1 ) + (7 * i)
    }

    return (
        <div className={styles.scheduleMain}>
            <div className={styles.nowDate}>
                { year } / { month } / { date }
            </div>
            <table>
                <thead>
                    <tr>
                        <td>日</td>
                        <td>月</td>
                        <td>火</td>
                        <td>水</td>
                        <td>木</td>
                        <td>金</td>
                        <td>土</td>
                    </tr>
                </thead>
                <tbody>
                    { [...Array(countWeek)].map((_,i) => {
                        return(
                            <tr key={i}>
                                { i == 0 ?
                                    [...Array(7)].map((_,item) => {

                                        const date = dayWeekEach(item,i)

                                        return(
                                            <>
                                                { date <= dayOfWeek ?
                                                    <td></td>
                                                    :
                                                    <>
                                                        { date - dayOfWeek == nowDate ?
                                                            <td className={styles.nowTd}>
                                                                { date - dayOfWeek }
                                                            </td>
                                                            :
                                                            <td>
                                                                { date - dayOfWeek }
                                                            </td>
                                                        }
                                                    </>
                                                }
                                            </>
                                        )
                                    })
                                    :
                                    [...Array(7)].map((_,item) => {

                                        const date = dayWeekEach(item,i)

                                        return(
                                            <>
                                                { date <= lastDate + dayOfWeek ?
                                                    <>
                                                        { date - dayOfWeek == nowDate ?
                                                            <td className={styles.nowTd}>
                                                                { date - dayOfWeek }
                                                            </td>
                                                            :
                                                            <td>
                                                                { date - dayOfWeek }
                                                            </td>
                                                        }
                                                    </>
                                                    :
                                                    <td></td>
                                                }
                                            </>
                                        )
                                    })
                                }
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </div>
    )
}
