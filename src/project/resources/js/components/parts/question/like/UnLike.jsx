import axios from 'axios'

import styles from '../../../../../../public/scss/parts/question.module.scss'

// いいねされている状態だからいいねする
export default function UnLike(props) {

    // 質問ID
    const questionId = props.questionId

    const SaveClick = () => {
        axios
            .post("/api/like/destroy",{
                question_id: questionId
            })
            .then((res) => {
                console.log(res.data)
            })
            .then((err) => {
                console.log(err)
            })
    }

    return <div className={styles.like} onClick={SaveClick}></div>
}
