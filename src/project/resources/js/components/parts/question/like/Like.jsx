import axios from 'axios'

import styles from '../../../../../../public/scss/parts/question.module.scss'

// いいねされていない状態だからいいねする
export default function Like(props) {

    // 質問ID
    const questionId = props.questionId

    const SaveClick = () => {
        axios
            .post("/api/like/store",{
                question_id: questionId
            })
            .then((res) => {
                console.log(res.data)
            })
            .then((err) => {
                console.log(err)
            })
    }

    return (
        <div className={styles.unlike} onClick={SaveClick}></div>
    )
}
