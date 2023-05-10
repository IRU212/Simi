import Form from "../../parts/question/create/Form";
import styles from '../../../../../public/scss/pages/question.module.scss'

// 質問作成ページ
export default function Create() {
    return (
        <div className={styles.create}>

            {/* 質問入力フォーム */}
            <Form />
        </div>
    )
}
