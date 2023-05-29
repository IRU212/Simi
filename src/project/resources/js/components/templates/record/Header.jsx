import styles from '../../../../../public/scss/templates/record.module.scss'
import SaveLink from '../../parts/record/header/SaveLink'
import Title from '../../parts/record/header/Title'

// 記録ヘッダー
export default function Header() {
    return (
        <div className={styles.header}>

            {/* タイトル */}
            <Title />

            {/* 記録保存リンク */}
            <SaveLink />

        </div>
    )
}
