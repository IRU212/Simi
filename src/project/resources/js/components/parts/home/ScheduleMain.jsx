import { useEffect, useState } from 'react'
import styles from '../../../../../public/scss/parts/home.module.scss'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
    const lastDateNow = sumWeek(nowYear,nowMonth)
    const [lastDate,setLastData] = useState(lastDateNow)

    // 現在の週の数
    const countWeek = Math.ceil(lastDate / 7)

    // 現在の月の最初の日の曜日
    const dayOfWeekNow = dayOfWeekGet(nowYear,nowMonth)
    const [dayOfWeek,SetDayOfWeek] = useState(dayOfWeekNow)

    // 週のそれぞれの日にち計算
    function dayWeekEach(item,i) {
        return ( item + 1 ) + (7 * i)
    }

    // 月の最初の日の曜日を取得
    function dayOfWeekGet(year,month) {
        return new Date(year,month - 1).getDay()
    }

    // 月の合計日数を取得
    function sumWeek(year,month) {
        return new Date(year,month,0).getDate()
    }

    // クリックしたら日にちを明日の日にする
    const FowardClick = () => {
        setDate(date + 1)

        // 月の最後の日になったら実行
        if (date == lastDate) {
            setDate(1) // 一日にする
            setMonth(month + 1) // 月を来月にする

            // 12月以降になったら1月にする
            if (month > 11) {
                setMonth(1)
                setYear(1)
            }

            // 月の合計に日数を取得
            setLastData(sumWeek(year,month + 1))
        }
    }

    // クリックしたら日にちを機能の日にする
    const BackClick = () => {
        setDate(date - 1)
    }

    // 日付クリックしたらその日に切り替え
    const DateClick = (e) => {
        setDate(e);
    }

    return (
        <div className={styles.scheduleMain}>
            <div className={styles.nowDate}>
                <KeyboardArrowLeftIcon onClick={BackClick} className={styles.arrow} />
                <div>
                    { year } / { month } / { date }
                </div>
                <KeyboardArrowRightIcon onClick={FowardClick} className={styles.arrow} />
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

                                        // カレンダーの日付
                                        const dateItem = dayWeekEach(item,i)

                                        return(
                                            <>
                                                { dateItem <= dayOfWeek ?
                                                    <td key={item}></td>
                                                    :
                                                    <>
                                                        { dateItem - dayOfWeek == date ?
                                                            <td key={item} onClick={() => DateClick(dateItem - dayOfWeek)} className={styles.nowTd}>
                                                                { dateItem - dayOfWeek }
                                                            </td>
                                                            :
                                                            <td key={item} onClick={() => DateClick(dateItem - dayOfWeek)}>
                                                                { dateItem - dayOfWeek }
                                                            </td>
                                                        }
                                                    </>
                                                }
                                            </>
                                        )
                                    })
                                    :
                                    [...Array(7)].map((_,item) => {

                                        // カレンダーの日付
                                        const dateItem = dayWeekEach(item,i)

                                        return(
                                            <>
                                                { dateItem <= lastDate + dayOfWeek ?
                                                    <>
                                                        { dateItem - dayOfWeek == date ?
                                                            <td key={item} onClick={() => DateClick(dateItem - dayOfWeek)} className={styles.nowTd}>
                                                                { dateItem - dayOfWeek }
                                                            </td>
                                                            :
                                                            <td key={item} onClick={() => DateClick(dateItem - dayOfWeek)}>
                                                                { dateItem - dayOfWeek }
                                                            </td>
                                                        }
                                                    </>
                                                    :
                                                    <td key={item}></td>
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
