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
            { apiData?.image.length <= 0 ?
                ""
                :
                <>
                    { apiData?.image.map((item,index) =>
                        <img src={item?.image}key={index} className={styles.image} alt="画像" />
                    ) }
                </>
            }

        </div>
    )
}
