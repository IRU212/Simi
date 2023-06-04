import { Link } from "react-router-dom"
import styles from '../../../../../../public/scss/parts/admin/header.module.scss'

// リンク一覧
export default function LinkList() {
    return (
        <div className={styles.linkList}>

            {/* ユーザ */}
            <Link to="user">
                User
            </Link>

            {/* 質問 */}
            {/* <Link to="question">
                Qusetion
            </Link> */}

            {/* 通報 */}
            {/* <Link to="report">
                Report
            </Link> */}

            {/* メールアドレス */}
            {/* <Link to="email">
                Email
            </Link> */}

            {/* サポート/ヘルプ */}
            {/* <Link to="email">
                Support
            </Link> */}

            {/* 設定 */}
            {/* <Link to="setting">
                Setting
            </Link> */}

        </div>
    )
}
