import styles from '../../../../../public/scss/templates/home.module.scss'
import List from '../../parts/home/dateAction/List'

// 行動内容
export default function DateAction() {
    return (
        <div className={styles.dateAction}>

            {/* 行動リスト */}
            <List />

        </div>
    )
}
