import axios from 'axios'
import styles from '../../../../../../public/scss/parts/question.module.scss'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ReplyForm() {

    // DB保存用変数
    const [body,setBody] = useState("") // 本文

    // パラメータ取得
    const id = useParams()['id']

    // クリックしたらDBに保存
    const SaveClick = () => {

        const data = new FormData()
        data.append("body",body)
        data.append("question_id",id)

        axios
            .post("/api/question/reply/store",data)
            .then((() => {
                location.reload()
            }))
            .catch((err) => {
                console.log(err)
            })
    }

    // 本文が変更されたらbodyに保存
    const BodyChange = (e) => {
        setBody(e.target.value)
    }

    return (
        <div className={styles.replyForm}>

            <input type="text" placeholder='質問の返信を入力してください' onChange={BodyChange} />

            { body.length <= 0 ?
                <div className={styles.replyNoneButton} onClick={SaveClick} >
                    返信
                </div>
                :
                <div className={styles.replyButton} onClick={SaveClick} >
                    返信
                </div>
            }

        </div>
    )
}
