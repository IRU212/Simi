import styles from '../../../../../public/scss/pages/admin/user.module.scss'
import UserList from '../../templates/admin/user/UserList'

// ユーザ管理画面
export default function User() {
    return (
        <div>

            {/* ユーザ一覧リスト */}
            <UserList />
        </div>
    )
}
