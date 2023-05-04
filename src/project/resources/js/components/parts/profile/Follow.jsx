import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import styles from '../../../../../public/scss/parts/profile.module.scss'
import IsFollow from '../../api/get/follow/IsFollow'
import { useEffect } from 'react'

export default function Follow() {

    // APIフォロー判定
    const apiData = IsFollow()

    // フォロー判定
    const [data,setData] = useState(apiData)

    // パラメータを取得
    const paramsId = useParams()['id']

    // APIを受け取ったら変数に取得
    useEffect(() => {
        setData(apiData)
    },[apiData])

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

    // クリックしたらフォロー解除
    const UnFollowClick = () => {
        axios
            .post("/api/follow/destroy",{
                follow_id: paramsId
            })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    if (data) {
        return (
            <div className={styles.unfollow} onClick={UnFollowClick}>
                Following
            </div>
        )
    } else {
        return (
            <div className={styles.follow} onClick={FollowClick}>
                Follow
            </div>
        )
    }
}
