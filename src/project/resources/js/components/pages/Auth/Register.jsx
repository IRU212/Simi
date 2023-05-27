import Form from "../../parts/auth/register/Form";
import styles from '../../../../../public/scss/pages/auth.module.scss'

// アカウント新規会員登録ページ
export default function Register() {
    return (
        <div className={styles.authCover}>
            <Form />
        </div>
    )
}
