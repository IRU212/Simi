import Form from '../../parts/record/Form'

import styles from '../../../../../public/scss/pages/record.module.scss'

// 勉強記録保存[pages]
export default function Save() {
    return (
        <div className={styles.record}>

            {/* 勉強記録入力フォーム */}
            <Form />

        </div>
    )
}
