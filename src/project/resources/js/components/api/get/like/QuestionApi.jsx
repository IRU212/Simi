import React, { useEffect, useState } from 'react'

// 質問いいね判定API
export default function QuestionApi(props) {

    // API 取得データ用　変数
    const [data,setData] = useState()

    // リロード時に実行
    useEffect(() => {
        axios
            .get(`/api/like/index/${props}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return data

}
