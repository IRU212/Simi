import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios'

export default function LoginUserApi() {

    // API 取得データ用　変数
    const [data,setData] = useState()

    // リロード時に実行
    useLayoutEffect(() => {
        axios
            .get('/api/user/index')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return data
}
