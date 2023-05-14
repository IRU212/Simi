import QuestionDetailApi from "../../../api/get/like/QuestionDetailApi"
import styles from '../../../../../../public/scss/parts/question.module.scss'

// 質問詳細
export default function QuestionDetail() {

    const apiData = QuestionDetailApi()

    return (
        <div className={styles.detail}>

            {/* タイトル */}
            <div className={styles.name}>
                { apiData?.name }
            </div>
            {/* 質問本文 */}
            <div className={styles.body}>
                { apiData?.body.split("\n").map((item,index) => {
                    return(
                        <div key={index}>
                            { item }
                        </div>
                    )
                }
                ) }
            </div>
            {/* 画像 */}
            {/* { apiData?.image = null ?
                ""
                :
                <img src="https://prtimes.jp/i/30865/238/origin/d30865-238-463172-2.png" className={styles.image} alt="画像" />
            } */}

        </div>
    )
}
