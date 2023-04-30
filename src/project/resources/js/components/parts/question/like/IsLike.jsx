import axios from 'axios'

import styles from '../../../../../../public/scss/parts/question.module.scss'
import QuestionApi from '../../../api/get/like/QuestionApi'
import { useEffect, useState } from 'react'

// いいねボタン表示
export default function IsLike(props) {

    // 質問ID
    const questionId = props.questionId

    // いいね判定API取得
    const apiData = QuestionApi(questionId)

    const [data,setData] = useState(apiData)

    // APIを受け取り時に実行
    useEffect(() => {
        setData(apiData)
    },[apiData])

    console.log(data);

    // いいねされている：いいねされていない
    // true : false
    // いいねされていたらいいねを解除：いいねされていなければいいねする
    if (data) {

        // いいねすを解除
        const DeleteClick = () => {
            axios
                .post("/api/like/destroy",{
                    question_id: questionId
                })
                .then((res) => {
                    setData(res.data)
                })
                .then((err) => {
                    console.log(err)
                })
        }

        return (
            <div className={styles.like} onClick={DeleteClick}></div>
        )

    } else {

        // いいねする
        const SaveClick = () => {
            axios
                .post("/api/like/store",{
                    question_id: questionId
                })
                .then((res) => {
                    setData(res.data)
                })
                .then((err) => {
                    console.log(err)
                })
        }

        return (
            <div className={styles.unlike} onClick={SaveClick}></div>
        )
    }
}
