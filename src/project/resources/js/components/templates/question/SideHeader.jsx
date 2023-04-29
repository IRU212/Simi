import Course from "../../parts/question/Course";
import Subject from "../../parts/question/Subject";
import styles from '../../../../../public/scss/templates/question.module.scss'
import Post from "../../parts/question/Post";

// 質問種類　サイドヘッダー　
export default function SideHeader() {
    return (
        <div className={styles.sideHeader}>

            {/* 質問投稿リンク */}
            <Post />

            {/* 教科別項目 */}
            <Subject />

            {/* 科目別項目 */}
            <Course />

        </div>
    )
}
