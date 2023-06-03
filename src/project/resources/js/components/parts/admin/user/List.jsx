import { useEffect, useState } from 'react'
import styles from '../../../../../../public/scss/parts/admin/user.module.scss'
import axios from 'axios'

import LaunchIcon from '@mui/icons-material/Launch';
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// ユーザ一覧リスト
export default function List() {

    // リスト表示データ
    const [datas,setDatas] = useState()

    // ページネート数
    const [pagenate,setPagenate] = useState(1)

    // リロード時に実行
    useEffect(() => {

        console.log(pagenate);

        // APIを呼び出し
        axios
            .get(`http://localhost:8081/api/admin/user/index?page=${pagenate}`)
            .then((res) => {
                setDatas(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    },[pagenate])

    // クリックしたらページ数を増やす
    const AddPagenateClick = () => {
        setPagenate(() => setPagenate(pagenate + 1))
    }

    // クリックしたらページ数減らす
    const DownPagenateClick = () => {
        setPagenate(() => setPagenate(pagenate - 1))
    }

    //
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <table className={styles.userList}>

            <tr className={styles.titleItem}>
                <td className={styles.checkBox}>
                    <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </td>
                <td className={styles.id}>
                    ID
                </td>
                <td className={styles.name}>
                    ユーザ名
                </td>
                <td className={styles.email}>
                    メールアドレス
                </td>
                <td className={styles.role}>
                    権限
                </td>
                <td className={styles.situation}>
                    状態
                </td>
                <td className={styles.iconCover}></td>
            </tr>
            { datas?.data?.map((item,index) => {
                return(
                    <tr key={index} className={styles.itemCover}>
                        <td className={styles.checkBox}>
                            <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </td>
                        <td className={styles.id}>
                            { item.id }
                        </td>
                        <td className={styles.name}>
                            { item.name }
                        </td>
                        <td className={styles.email}>
                            { item.email }
                        </td>
                        <td className={styles.role}>
                            { item.role }
                        </td>
                        <td className={styles.situation}>
                            { item.situation }
                        </td>
                        <td className={styles.iconCover}>
                            <LaunchIcon className={styles.icon} />
                        </td>
                    </tr>
                )
            }) }
            <tr className={styles.footer}>
                <div className={styles.row}>
                    10 rows
                </div>
                <div className={styles.pagenateCover}>
                    { pagenate !== 1 ?
                        <KeyboardArrowLeftIcon className={styles.arrowIcon} onClick={DownPagenateClick} />
                        :
                        <KeyboardArrowLeftIcon className={styles.arrowNoIcon} />
                    }
                    { pagenate }
                    { datas?.next_page_url == null ?
                        <KeyboardArrowRightIcon className={styles.arrowNoIcon} />
                        :
                        <KeyboardArrowRightIcon className={styles.arrowIcon} onClick={AddPagenateClick} />
                    }
                </div>
            </tr>

        </table>
    )
}
