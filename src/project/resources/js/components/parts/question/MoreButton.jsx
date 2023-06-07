import { Link } from 'react-router-dom'
import styles from '../../../../../public/scss/parts/question.module.scss'
import { useState } from 'react'

// モーダル
// 質問アイテム
export default function MoreButton(e) {

    // モーダル表示判定
    const [isModal,setIsModal] = useState(false)

    // モーダル背景クリック
    const ModalClick = (e) => {
        if (e.target == e.currentTarget) {
            setIsModal(false)
        }
    }

    return (
        <>
            <Link to={"/question"} className={styles.moreButton} onClick={() => setIsModal(!isModal)}>
                <div>
                    ・・・
                </div>
            </Link>
            { isModal ?
                <Link to={"/question"} className={styles.backModal} onClick={(e) => ModalClick(e)}>
                    <div className={styles.modal} >
                        <div>
                            ユーザブロック
                        </div>
                        <div>
                            投稿通報
                        </div>
                    </div>
                </Link>
                :
                ""
            }
        </>
    )
}
