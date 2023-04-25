import { createContext, useState } from "react"

// スタイル
import styles from '../../../../../public/scss/parts/record.module.scss'

// // 入力データ受け渡し
// export const BodyContext = createContext(body)

// 勉強記録[parts]
export default function Form() {

    // 保存用データ
    const [body,setBody] = useState("") // 内容
    const [time,setTime] = useState("") // 時間
    const [subject,setSubject] = useState("") // 科目

    return (
        <div className={styles.form}>

            <div className={styles.ImageCover}>
                <img src="https://pbs.twimg.com/media/EjELaMQU8AAx4TL.jpg" alt="画像" />
            </div>

            <div className={styles.MainCover}>

                <section>
                    <div className="name">
                        学習内容
                    </div>
                    <input type="text" />
                </section>
                <section>
                    <div className="name">
                        時間
                    </div>
                    <input type="text" />
                </section>
                <section>
                    <div className="name">
                        科目
                    </div>
                    <input type="text" />
                </section>

                <div>
                    記録
                </div>

            </div>

        </div>
    )
}
