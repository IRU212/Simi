import { useEffect, useState } from 'react'
import styles from '../../../../../../public/scss/parts/record.module.scss'
import axios from 'axios'
import StudyApi from '../../../api/get/record/StudyApi'

// 本ランキング
export default function BookRanking() {

    // APIデータ
    const [apiData,setApiData]  = useState([])

    // リロード時に実行
    useEffect(() => {
        axios
            .get('/api/record/index')
            .then((res) => {
                if (res.data !== undefined) {
                    setApiData(res.data?.book)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    console.log(apiData);

    return (
        <div className={styles.bookRanking}>

        </div>
    )
}
