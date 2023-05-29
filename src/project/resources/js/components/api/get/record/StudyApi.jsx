import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'

// 勉強記録API取得
export default function DashbordApi() {

    // API 取得データ用　変数
    const [data,setData] = useState()

    // リロード時に実行
    useEffect(() => {
        axios
            .get('/api/record/index')
            .then((res) => {
                if (res.data !== undefined) {
                    setData(res.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return data
}
