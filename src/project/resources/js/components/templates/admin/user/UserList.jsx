import styles from '../../../../../../public/scss/templates/admin/user.module.scss'
import List from "../../../parts/admin/user/List";

// ユーザリスト
export default function UserList() {
    return (
        <div>

            <div className={styles.title}>
                ユーザ一覧
            </div>

            {/* ユーザ一覧ヘッダー */}

            {/* ユーザ一覧リスト */}
            <List />

        </div>
    )
}
