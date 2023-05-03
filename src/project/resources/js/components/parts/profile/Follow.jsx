import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import styles from '../../../../../public/scss/parts/profile.module.scss'

export default function Follow() {

    // フォロー判定
    const [data,setData] = useState(false)

    // パラメータを取得
    const paramsId = useParams()['id']

    // クリックしたらフォロー
    const FollowClick = () => {
        axios
            .post("/api/follow/store",{
                follow_id: paramsId
            })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    if (!data) {
        return (
            <div className={styles.follow} onClick={FollowClick}>
                Follow
            </div>
        )
    } else {
        return (
            <div className={styles.unfollow} onClick={FollowClick}>
                Following
            </div>
        )
    }
}
