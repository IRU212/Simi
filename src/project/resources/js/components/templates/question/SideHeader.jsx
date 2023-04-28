import Course from "../../parts/question/Course";
import Subject from "../../parts/question/Subject";

// 質問種類　サイドヘッダー　
export default function SideHeader() {
    return (
        <div>

            {/* 教科別項目 */}
            <Subject />

            {/* 科目別項目 */}
            <Course />

        </div>
    )
}
