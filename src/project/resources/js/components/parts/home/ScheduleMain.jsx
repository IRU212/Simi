import styles from '../../../../../public/scss/parts/home.module.scss'

// カレンダーメインデザイン
export default function ScheduleMain() {

    // メソッド呼び出し
    const date = new Date()

    // 現在の情報を取得
    const nowYear = date.getFullYear() // 年
    const nowMonth = date.getMonth() + 1 // 月
    const nowDate = date.getDate() // 日

    // 現在の月の合計日数
    const lastDate = new Date(nowYear,nowMonth,0).getDate();

    // 現在の週の数
    const countWeek = Math.ceil(lastDate / 7)

    return (
        <div className={styles.scheduleMain}>
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
                                { [...Array(7)].map((_,item) => {
                                    return(
                                        <td>
                                            {( item + 1 ) + (7 * i)}
                                        </td>
                                    )
                                }) }
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </div>
    )
}
