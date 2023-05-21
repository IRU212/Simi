import Form from "../parts/record/Form";
import Time from "../templates/record/Time";

import styles from '../../../../public/scss/pages/record.module.scss'

// 勉強記録[pages]
export default function Record() {
    return (
        <div className={styles.record}>

            {/* 時間表示 */}
            <Time />

            {/* 勉強記録入力フォーム */}
            <Form />

        </div>
    )
}
