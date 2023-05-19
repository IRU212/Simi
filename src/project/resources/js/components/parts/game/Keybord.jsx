import { useEffect, useState } from 'react';
import styles from '../../../../../public/scss/parts/game.module.scss'

// キーボードデザイン
export default function Keybord() {

    // キー取得変数
    const [key,setKey] = useState(null)

    // 使用キー取得
    const handleKeyDown = (e) => {
        setKey(e.key)

        setTimeout(() => {
            setKey(null)
        },500)
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown, false)
    }, [])

    return (
        <div className={styles.keybord}>

            <div className={styles.headerKeybord}>

                <div className={styles.title}>
                    タイピングゲーム
                </div>
                <div className={styles.point}>
                    0 / 0
                </div>
            </div>

            <div className={styles.answer}>
                anser
            </div>

            <div className={styles.keybordCover}>

                <section className={styles.firstSection}>
                    <div className={`${key === "q" ? styles.keyNow : ""}`}>
                        Q
                    </div>
                    <div className={`${key === "w" ? styles.keyNow : ""}`}>
                        W
                    </div>
                    <div className={`${key === "e" ? styles.keyNow : ""}`}>
                        E
                    </div>
                    <div className={`${key === "r" ? styles.keyNow : ""}`}>
                        R
                    </div>
                    <div className={`${key === "t" ? styles.keyNow : ""}`}>
                        T
                    </div>
                    <div className={`${key === "y" ? styles.keyNow : ""}`}>
                        Y
                    </div>
                    <div className={`${key === "u" ? styles.keyNow : ""}`}>
                        U
                    </div>
                    <div className={`${key === "i" ? styles.keyNow : ""}`}>
                        I
                    </div>
                    <div className={`${key === "o" ? styles.keyNow : ""}`}>
                        O
                    </div>
                    <div className={`${key === "p" ? styles.keyNow : ""}`}>
                        P
                    </div>
                </section>
                <section className={styles.secoundSection}>
                    <div className={`${key === "a" ? styles.keyNow : ""}`}>
                        A
                    </div>
                    <div className={`${key === "s" ? styles.keyNow : ""}`}>
                        S
                    </div>
                    <div className={`${key === "d" ? styles.keyNow : ""}`}>
                        D
                    </div>
                    <div className={`${key === "f" ? styles.keyNow : ""}`}>
                        F
                    </div>
                    <div className={`${key === "g" ? styles.keyNow : ""}`}>
                        G
                    </div>
                    <div className={`${key === "h" ? styles.keyNow : ""}`}>
                        H
                    </div>
                    <div className={`${key === "j" ? styles.keyNow : ""}`}>
                        J
                    </div>
                    <div className={`${key === "k" ? styles.keyNow : ""}`}>
                        K
                    </div>
                    <div className={`${key === "l" ? styles.keyNow : ""}`}>
                        L
                    </div>
                </section>
                <section className={styles.thirdSection}>
                    <div className={`${key === "z" ? styles.keyNow : ""}`}>
                        Z
                    </div>
                    <div className={`${key === "x" ? styles.keyNow : ""}`}>
                        X
                    </div>
                    <div className={`${key === "c" ? styles.keyNow : ""}`}>
                        C
                    </div>
                    <div className={`${key === "v" ? styles.keyNow : ""}`}>
                        V
                    </div>
                    <div className={`${key === "b" ? styles.keyNow : ""}`}>
                        B
                    </div>
                    <div className={`${key === "n" ? styles.keyNow : ""}`}>
                        N
                    </div>
                    <div className={`${key === "m" ? styles.keyNow : ""}`}>
                        M
                    </div>
                </section>

            </div>

        </div>
    )
}
