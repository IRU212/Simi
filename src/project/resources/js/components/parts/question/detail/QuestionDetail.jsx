import QuestionDetailApi from "../../../api/get/like/QuestionDetailApi"

// 質問詳細
export default function QuestionDetail() {

    const apiData = QuestionDetailApi()

    console.log(apiData)

    return (
        <div>
            QuestionDetail
        </div>
    )
}
