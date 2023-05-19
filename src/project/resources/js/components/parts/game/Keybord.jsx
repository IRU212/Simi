import { useEffect } from 'react';
import styles from '../../../../../public/scss/parts/game.module.scss'

// キーボードデザイン
export default function Keybord() {

    // 使用キー取得
    const handleKeyDown = (e) => {
        console.log(e.key);
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
                    <div>
                        Q
                    </div>
                    <div>
                        W
                    </div>
                    <div>
                        E
                    </div>
                    <div>
                        R
                    </div>
                    <div>
                        T
                    </div>
                    <div>
                        Y
                    </div>
                    <div>
                        U
                    </div>
                    <div>
                        I
                    </div>
                    <div>
                        O
                    </div>
                    <div>
                        P
                    </div>
                </section>
                <section className={styles.secoundSection}>
                    <div>
                        A
                    </div>
                    <div>
                        S
                    </div>
                    <div>
                        D
                    </div>
                    <div>
                        F
                    </div>
                    <div>
                        G
                    </div>
                    <div>
                        H
                    </div>
                    <div>
                        J
                    </div>
                    <div>
                        K
                    </div>
                    <div>
                        L
                    </div>
                </section>
                <section className={styles.thirdSection}>
                    <div>
                        Z
                    </div>
                    <div>
                        X
                    </div>
                    <div>
                        C
                    </div>
                    <div>
                        V
                    </div>
                    <div>
                        B
                    </div>
                    <div>
                        N
                    </div>
                    <div>
                        M
                    </div>
                </section>

            </div>

        </div>
    )
}
