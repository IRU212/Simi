import styles from '../../../../../public/scss/templates/admin/header.module.scss'
import LinkList from '../../parts/admin/sideHeader/LinkList'

// サイドヘッダー
export default function SideHeader() {
    return (
        <div className={styles.sideHeader}>

            {/* リンク一覧 */}
            <LinkList />
        </div>
    )
}
