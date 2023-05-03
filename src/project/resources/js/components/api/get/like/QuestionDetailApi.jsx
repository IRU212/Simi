import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function QuestionDetailApi() {

    // API 取得データ用　変数
    const [data,setData] = useState()

    // パラメータ取得
    const id = useParams()['id']

    // リロード時に実行
    useEffect(() => {
        axios
            .get(`/api/question/${id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return data
}
