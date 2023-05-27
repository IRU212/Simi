import { useEffect, useState } from 'react'
import axios from 'axios'
import ImageIcon from '@mui/icons-material/Image';

import styles from '../../../../../../public/scss/parts/record.module.scss'
import loading from '../../../../../../public/scss/parts/common.module.scss'

// 本ランキング
export default function BookRanking() {

    // APIデータ
    const [apiData,setApiData]  = useState([])

    // リロード時に実行
    useEffect(() => {
        axios
            .get('/api/record/index')
            .then((res) => {
                if (res.data !== undefined) {
                    setApiData(res.data?.book)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    console.log(apiData);

    return (
        <>
            <div className={styles.bookRanking}>
                { apiData.length == 0 ?
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
            </div>
        </>
    )
}
