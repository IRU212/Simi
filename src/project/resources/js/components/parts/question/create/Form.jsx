import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

import styles from '../../../../../../public/scss/parts/question.module.scss'

// 質問作成フォーム
export default function Form() {

    // DB保存用変数
    const [name,setName] = useState("")
    const [body,setBody] = useState("")
    const [subject,setSubject] = useState("")
    const [course,setCourse] = useState("")
    const [image,setImage] = useState("")

    // プレビュー画像
    const [previewImage,setPreviewIconImage] = useState(null)

    // 名前が変更されたらnameに保存
    const NameChange = (e) => {
        setName(e.target.value)
    }

    // 本文が変更されたらbodyに保存
    const BodyChange = (e) => {
        setBody(e.target.value)
    }

    // 画像が変更されたらbodyに保存
    const ImageChange = (e) => {
        setImage(e.target.files[0])

        // オブジェクトURLを生成し、useState()を更新
        setPreviewIconImage(window.URL.createObjectURL(e.target.files[0]))
    }

    // 本文が変更されたらsubjectに保存
    const SubjectChange = (e) => {

        if (e.target.value == "") {
            setCourse("")
            setSubject("")
        } else {
            setSubject(e.target.value)
        }

    }

    // 本文が変更されたらsubjectに保存
    const CourseChange = (e) => {
        setCourse(e.target.value)
    }

    // クリックしたらDBに保存
    const SaveClick = () => {

        const data = new FormData()
        data.append("name",name)
        data.append("body",body)
        data.append("subject",subject)
        data.append("course",course)
        data.append("image",image)

        axios
            .post("/api/question/store",data)
            .then((() => {
                location.href = "/question"
            }))
            .catch((err) => {
                console.log(err)
            })
    }

    // クリックしたら画像キャンセル
    const ImageCancelClick = () => {
        setImage("")
        setPreviewIconImage(null)
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
                    {/* <div contentEditable="true" className={styles.bodyTextArea} value={body} onInput={BodyInput}>

                    </div> */}
                    <textarea rows="18" className={styles.bodyTextArea} onChange={BodyChange}>

                    </textarea>
                </section>

                <section>

                    <div className={styles.title}>
                        画像
                    </div>
                    <div className={styles.inputImageCover}>
                        { previewImage == null ?
                            <>
                                <input type="file" id='image' accept="image/*" multiple onChange={ImageChange} className={styles.inputNone} />
                                <label htmlFor="image" className={styles.imageSelect}>
                                    画像を追加
                                </label>
                            </>
                            :
                            ""
                        }
                        <div className={styles.imagePreviewCover}>
                            <label htmlFor="image">
                                { previewImage == null ?
                                    ""
                                    :
                                    <>
                                        <img src={`${previewImage}`} className={styles.previewImage} />
                                    </>
                                }
                            </label>
                            { previewImage == null ?
                                ""
                                :
                                <CloseIcon className={styles.crossIcon} onClick={ImageCancelClick} />
                            }
                        </div>
                    </div>

                </section>

                <section>

                    <div className={styles.title}>
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

                    <div className={styles.title}>
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

                { name == "" || body == "" ?
                    <div className={styles.postNoButton} >
                        投稿
                    </div>
                    :
                    <div className={styles.postButton} onClick={SaveClick}>
                        投稿
                    </div>
                }

            </div>

        </div>
    )
}
