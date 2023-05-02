import { useState } from 'react'
import styles from '../../../../../public/scss/parts/search.module.scss'

export default function Form() {

    // urlを取得
    const url = window.location.href

    // urlのドメイン以降を取得
    const pathname = window.location.pathname

    // クエリー取得 keyword
    const getUrl = url.split("=")[1]

    return (
        <form action={`${pathname}`} method="get">
            <input type="text" name='keyword' placeholder={getUrl} />
        </form>
    )
}
