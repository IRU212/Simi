import { createContext, useEffect, useState } from "react"

// スタイル
import styles from '../../../../../public/scss/parts/record.module.scss'
import axios from "axios"

// // 入力データ受け渡し
// export const BodyContext = createContext(body)

// 勉強記録[parts]
export default function Form() {

    // Google Books APIs 検索キーワード
    const [keyword,setKeyword] = useState("")

    // Google Books APIs 呼び出し
    useEffect(() => {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    // DB保存用変数
    const [name,setName] = useState("")
    const [body,setBody] = useState("")
    const [subject,setSubject] = useState("")
    const [course,setCourse] = useState("")
    const [image,setImage] = useState("")

    // 教科が変更されたらsubjectに保存
    const SubjectChange = (e) => {

        if (e.target.value == "") {
            setCourse("")
            setSubject("")
        } else {
            setSubject(e.target.value)
        }

    }

    // 科目が変更されたらsubjectに保存
    const CourseChange = (e) => {
        setCourse(e.target.value)
    }

    // タイマー時刻　リスト
    const [hourCount,setHourCount] = useState(0)
    const [minutesCount,setMinutesCount] = useState(0)
    const [secondsCount,setSecondsCount] = useState(0)

    // タイマー実行判定
    const [time,setTime] = useState(false)

    // リセット・ストップボタン表示判定
    const [resetButton,setResetButton] = useState(true)

    // リロード時に一回実行
    useEffect(() => {

        // 1秒ごとに実行
        const interval = setInterval(() => {

            if (time) {
                // 秒数に一秒足す
                setSecondsCount(c => c + 1)
            }

        },1000)

        // 一定間隔ごとに実行する処理を解除
        // このメソッドがないとタイマーがバグる
        return () => clearInterval(interval)

    },[time])

    // 秒数が足されるたびに実行
    useEffect(() => {

        // 秒数が60秒になったら1分ずつ追加
        if (secondsCount == 60) {

            // 秒数を0に戻す
            setSecondsCount(0)

            // 1分タイマーを足す
            setMinutesCount(minutesCount + 1)
        }

        // 分数が60分になったら1時間ずつ追加
        if (minutesCount == 60) {

            // 秒数を0に戻す
            setMinutesCount(0)

            // 1分タイマーを足す
            setHourCount(hourCount + 1)
        }

    },[secondsCount])

    // クリックしたらタイマー実行
    const StartClick = () => {
        setTime(true)
    }

    // クリックしたらタイマーをリセット
    const ResetClick = () => {
        setHourCount(0)
        setMinutesCount(0)
        setSecondsCount(0)
        setResetButton(true) // ストップ・リセットボタン切り替え
    }

    // クリックしたらタイマー止める
    const StopClick = () => {
        setTime(false)
        setResetButton(false) // ストップ・リセットボタン切り替え
    }

    return (
        <div className={styles.form}>

            <div className={styles.timerecord}>

                <div className={styles.mainTime}>
                    { hourCount } : { minutesCount } : { secondsCount }
                </div>

                <div className={styles.buttonCover}>
                    <div onClick={StartClick} className={styles.startButton}>
                        <p>
                            START
                        </p>
                    </div>
                    { resetButton ?
                        <div onClick={StopClick} className={styles.stopButton}>
                            <p>
                                STOP
                            </p>
                        </div>
                        :
                        <div onClick={ResetClick} className={styles.startButton}>
                            <p>
                                RESET
                            </p>
                        </div>
                    }
                </div>

            </div>

            <div className={styles.MainCover}>

                <section>
                    <div className="name">
                        学習一言メモ
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
                        教科
                    </div>
                    <select onChange={SubjectChange}>
                        <option value="" hidden>選択してください</option>
                        <option value="">未選択</option>
                        <option value="1">国語</option>
                        <option value="2">数学</option>
                        <option value="3">理科</option>
                        <option value="4">社会</option>
                        <option value="5">英語</option>
                    </select>
                </section>
                <section>
                    <div className="name">
                        科目
                    </div>
                    <select onChange={CourseChange}>
                        <option value="" hidden>選択してください</option>

                        { subject == ""  ?
                            <option value="">教科を選択してください</option>
                            :
                            ""
                        }

                        {/* 国語 */}
                        { subject == 1 ?
                            <>
                                <option value="1">国語総合</option>
                                <option value="2">国語表現</option>
                                <option value="3">現代文A</option>
                                <option value="4">現代文B</option>
                                <option value="5">古典A</option>
                                <option value="6">古典B</option>
                            </>
                            :
                            ""
                        }

                        {/* 数学 */}
                        { subject == 2 ?
                            <>
                                <option value="7">数学1</option>
                                <option value="8">数学2</option>
                                <option value="9">数学3</option>
                                <option value="10">数学A</option>
                                <option value="11">数学B</option>
                                <option value="12">数学活用</option>
                            </>
                            :
                            ""
                        }

                        {/* 理科 */}
                        { subject == 3 ?
                            <>
                                <option value="13">科学と人間生活</option>
                                <option value="14">物理基礎</option>
                                <option value="15">物理</option>
                                <option value="16">科学基礎</option>
                                <option value="17">科学</option>
                                <option value="18">生物基礎</option>
                                <option value="19">生物</option>
                                <option value="20">地学基礎</option>
                                <option value="21">地学</option>
                                <option value="22">理科課題研究</option>
                            </>
                            :
                            ""
                        }

                        {/* 社会 */}
                        { subject == 4 ?
                            <>
                                <option value="23">世界史A</option>
                                <option value="24">世界史B</option>
                                <option value="25">日本史A</option>
                                <option value="26">日本史B</option>
                                <option value="27">地学A</option>
                                <option value="28">地学B</option>
                                <option value="29">現代社会</option>
                                <option value="30">論理</option>
                                <option value="31">政治・経済</option>
                            </>
                            :
                            ""
                        }

                        {/* 英語 */}
                        { subject == 5 ?
                            <>
                                <option value="32">コミュニケーション英語基礎</option>
                                <option value="33">コミュニケーション英語1</option>
                                <option value="34">コミュニケーション英語2</option>
                                <option value="35">コミュニケーション英語3</option>
                                <option value="36">英語表現A</option>
                                <option value="37">英語表現B</option>
                                <option value="38">英語会話</option>
                            </>
                            :
                            ""
                        }

                    </select>
                </section>

                <div className={styles.postButton}>
                    記録
                </div>


            </div>

        </div>
    )
}
