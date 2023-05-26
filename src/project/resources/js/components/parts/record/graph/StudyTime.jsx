import { Chart, registerables } from "chart.js"
import { Line } from "react-chartjs-2"
Chart.register(...registerables)

import styles from '../../../../../../public/scss/parts/record.module.scss'
import { useEffect, useState } from "react"
import axios from "axios"

// 勉強時間グラフ
export default function StudyTime() {

    // APIデータ
    const [apiData,setApiData] = useState()

    // リロード時に実行
    useEffect(() => {
        axios
            .get("/api/record/index")
            .then((res) => {
                setApiData(res.data)

                setStudyTimeGraph([
                    res.data[0]["time"], res.data[1]["time"], res.data[2]["time"], res.data[3]["time"], res.data[4]["time"], res.data[5]["time"],
                    res.data[6]["time"], res.data[7]["time"], res.data[8]["time"], res.data[9]["time"], res.data[10]["time"], res.data[11]["time"]
                ])
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    // グラフ表示データ
    const [studyTimeGraph,setStudyTimeGraph] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    // グラフ表示月
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

    // グラフデータ
    const data = {
        labels: labels,
        datasets: [
            {
                label: "勉強時間",
                data: studyTimeGraph,
                borderColor: "rgb(75, 192, 192)",
            },
        ],
    }

    // グラフ設定
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
