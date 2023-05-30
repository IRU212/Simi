import { useEffect, useState } from 'react'
import axios from 'axios'
import ImageIcon from '@mui/icons-material/Image';

import styles from '../../../../../../public/scss/parts/record.module.scss'
import loading from '../../../../../../public/scss/parts/common.module.scss'

// 本ランキング
export default function BookRanking() {

    // APIデータ
    const [apiData,setApiData]  = useState([])
    const [apiGetData,setApiGetData] = useState(false) // 受け取り判定

    // リロード時に実行
    useEffect(() => {
        axios
            .get('/api/record/index')
            .then((res) => {
                if (res.data !== undefined) {

                    // 3秒後に実行
                    setTimeout(() => {
                        setApiData(res.data?.book)
                        setApiGetData(true)
                    },3000)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    console.log(apiData);
    console.log(apiGetData);

    return (
        <>
            <div className={styles.bookRanking}>

                {/* ロード中 */}
                { apiGetData ?
                    <>
                        { apiData.length == 0 ?
                            <div className={styles.Coverloading}>
                                <div className={styles.noBookList}>
                                    使用書籍がありません
                                </div>
                            </div>
                            :
                            <>
                                { apiData.map((item,index) => {
                                    return(
                                        <div className={styles.item} key={index}>
                                            { item.volumeInfo.imageLinks?.smallThumbnail.length > 0 ?
                                                <img src={`${item.volumeInfo.imageLinks?.smallThumbnail}`} className={styles.bookImage} alt="画像" />
                                                :
                                                <ImageIcon className={styles.imageIcon} />
                                            }
                                            { item.volumeInfo.title }
                                        </div>
                                    )
                                }) }
                            </>
                        }
                    </>
                    :
                    <div className={styles.Coverloading}>
                        <div className={styles.loadingItem}>
                            <div className={loading.threeQuarterSpinner}></div>
                        </div>
                        <div className={styles.loadingItem}>
                            <div className={loading.threeQuarterSpinner}></div>
                        </div>
                        <div className={styles.loadingItem}>
                            <div className={loading.threeQuarterSpinner}></div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
