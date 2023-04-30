import React, { useEffect, useState } from 'react'

// 質問いいね判定API
export default function QuestionApi() {

    // API 取得データ用　変数
    const [data,setData] = useState()

    // リロード時に実行
    useEffect(() => {
        axios
            .get(`/api/like/index/1`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return data

}
