import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styles from '../../../../../../public/scss/parts/question.module.scss'
import QuestionReplyApi from '../../../api/get/question/QuestionReplyApi'

export default function ReplyList() {

    // Apiデータ取得
    const [data,setData] = useState([])

    // ドメイン以降のURLを取得
    const pathname = window.location.pathname

    // パラメータを取得
    const paramsId = useParams()['id']

    // 初期ページネイトページ数
    const [idPagenate,setIdPagenate] = useState(1)

    // URLが変更されるたびに実行
    useEffect(() => {
        axios
            .get(`${location.origin}/api/question/reply/${paramsId}?page=${idPagenate}`)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [pathname,paramsId])

    return (
        <div className={styles.replyList}>
            { data?.map((item,index) => {
                return(
                    <div key={index} className={styles.replyItem}>
                        <Link to={`/profile/${item.user_id}`} className={styles.icon}>
                            { item.user.icon_image == null ?
                                <AccountCircleIcon className={styles.humnanIcon}  />
                                :
                                <img src={`${item.user.icon_image}`} alt="アイコン" />
                            }
                        </Link>
                        <div className={styles.main}>
                            { item?.body }
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}
