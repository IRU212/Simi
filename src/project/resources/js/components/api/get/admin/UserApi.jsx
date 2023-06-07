import React, { useEffect, useState } from 'react'

// 管理者ユーザ一覧
export default function UserApi() {

    // API 取得データ用　変数
    const [data,setData] = useState()

    // リロード時に実行
    useEffect(() => {
        axios
            .get('/api/admin/user/index')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return data
}
