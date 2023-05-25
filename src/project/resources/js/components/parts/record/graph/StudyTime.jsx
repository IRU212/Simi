import { Chart, registerables } from "chart.js"
import { Line } from "react-chartjs-2"
Chart.register(...registerables)

import styles from '../../../../../../public/scss/parts/record.module.scss'

// 勉強時間グラフ
export default function StudyTime() {

    const labels = [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ]

    const data = {
        labels: labels,
        datasets: [
            {
                label: "勉強時間",
                data: [40, 60, 70, 40, 50, 80, 40, 60, 70, 40, 50, 160],
                borderColor: "rgb(75, 192, 192)",
            },
        ],
    }

    const options = {
        maintainAspectRatio: false,
        responsive: true,
    }

    return (
        <div className={styles.studyTime}>
            <Line height={300} width={800} data={data} options={options} className={styles.graph} />
        </div>
    )
}
