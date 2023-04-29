import React, { useState } from 'react'
import styles from '../../../../../../public/scss/parts/question.module.scss'

// 質問作成フォーム
export default function Form() {

    // DB保存用変数
    const [name,setName] = useState("")
    const [body,setBody] = useState("")

    // 名前が変更されたらnameに保存
    const NameChange = (e) => {
        setName(e.target.value)
    }

    // 本文が変更されたらbodyに保存
    const BodyInput = (e) => {
        setBody(e.target.innerHTML)
        console.log(body)
    }

    return (
        <div className={styles.form}>

            <div className={styles.cover}>

                <section>
                    <div className={styles.title}>
                        タイトル
                    </div>
                    <input type="text" onChange={NameChange} />
                </section>

                <section>
                    <div className={styles.title}>
                        質問内容
                    </div>
                    <div contentEditable="true" className={styles.bodyTextArea} value={body} onInput={BodyInput}>

                    </div>
                </section>

                <section>
                    <div className={styles.title}>
                        質問内容プレビュー
                    </div>
                    <div className={styles.bodyTextArea} value={body} onInput={BodyInput}>

                        {/* 改行時に作成される<div>を基準に分割 */}
                        { body.split("<div>").map((item,index) => {
                            return(
                                <div key={index}>
                                    { item.replace("</div>",'').replace("<br>","") }
                                </div>
                            )
                        }) }

                    </div>
                </section>

                <section>
                    <div className={styles.title}>
                        教科
                    </div>
                    <input type="text" />
                </section>

                <section>
                    <div className={styles.title}>
                        科目
                    </div>
                    <input type="text" />
                </section>

                <div className={styles.postButton}>
                    投稿
                </div>

            </div>

        </div>
    )
}
