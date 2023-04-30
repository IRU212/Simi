import styles from '../../../../../../public/scss/parts/question.module.scss'
import QuestionApi from '../../../api/get/like/QuestionApi'

// いいねボタン表示
export default function IsLike() {

    // いいね判定API取得
    const apiData = QuestionApi()

    // いいねされている：いいねされていない
    // true : false
    if (apiData) {
        return <div className={styles.like}></div>
    } else {
        return <div className={styles.unlike}></div>
    }
}
