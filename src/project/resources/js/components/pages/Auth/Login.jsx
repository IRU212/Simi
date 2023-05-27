import styles from '../../../../../public/scss/pages/auth.module.scss'

import Form from '../../parts/auth/login/Form'

export default function Login() {
    return (
        <div className={styles.authCover}>
            <Form />
        </div>
    )
}
