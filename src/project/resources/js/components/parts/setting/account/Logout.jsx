import axios from 'axios'
import React from 'react'
import styles from '../../../../../../public/scss/parts/setting.module.scss'

export default function Logout() {

    // クリックしたらログアウト
    const LogoutClick = () => {
        axios
            .get("/api/user/logout")
            .then(() => {
                location.href = "/login"
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={LogoutClick} className={styles.logoutButton}>
            ログアウト
        </div>
    )
}
