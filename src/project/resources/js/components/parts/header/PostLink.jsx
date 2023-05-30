import { useState } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// スタイル
import styles from '../../../../../public/scss/parts/header.module.scss'

// ヘッダー作成リンク一覧
export default function PostLink() {

    // モーダル判定
    const [isModal,setIsModal] = useState(false)

    // クリック時ようにモーダルキャンセル
    const CancelClick = () => {
        setIsModal(false)
    }

    // 表示モーダルの外側をクリック
    const outSideModalClick = (e) => {

        // 表示モダール外側がクリックされたら非表示にする
        if (e.target == e.currentTarget) {
            setIsModal(false)
        }
    }

    // Windowブラウザの高さを取得
    const outerHeight = window.outerHeight + window.innerHeight + "px"

    return (
        <div className={styles.postLink}>
            <div className={styles.LinkMain} onClick={() => setIsModal(!isModal)}>
                質問を作成 <KeyboardArrowDownIcon className={styles.downArroeIcon} />
            </div>
            { isModal ?
                <div className={styles.modalBackCover} onClick={(e) => outSideModalClick(e)} style={{
                    height: `${outerHeight}`
                }}>
                    <div className={styles.modalCover}>
                        <Link to="/question/create" onClick={CancelClick}>
                            質問を作成
                        </Link>
                        <Link to="/record/save" onClick={CancelClick}>
                            勉強を記録
                        </Link>
                    </div>
                </div>
                :
                ""
            }
        </div>
    )
}
