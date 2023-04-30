import styles from '../../../../../../public/scss/parts/question.module.scss'
import QuestionApi from '../../../api/get/like/QuestionApi'
import Like from './Like'
import UnLike from './UnLike'

// いいねボタン表示
export default function IsLike() {

    // いいね判定API取得
    const apiData = QuestionApi()

    // いいねされている：いいねされていない
    // true : false
    // いいねされていたらいいねを解除：いいねされていなければいいねする
    if (apiData) {
        return <UnLike />
    } else {
        return <Like />
    }
}
