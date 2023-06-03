import { useEffect, useState } from 'react'
import styles from '../../../../../../public/scss/parts/admin/user.module.scss'
import axios from 'axios'

// ユーザ一覧リスト
export default function List() {

    // リスト表示データ
    const [datas,setDatas] = useState()

    // リロード時に実行
    useEffect(() => {

        // APIを呼び出し
        axios
            .get('/api/admin/user/index')
            .then((res) => {
                setDatas(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div className={styles.userList}>
            { datas?.data?.map((item,index) => {
                return(
                    <div key={index} className={styles.itemCover}>
                        <div>
                            { item.id }
                        </div>
                        <div>
                            { item.name }
                        </div>
                        <div>
                            { item.email }
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}
