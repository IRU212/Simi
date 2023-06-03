import { useEffect, useState } from 'react'
import styles from '../../../../../../public/scss/parts/admin/user.module.scss'
import axios from 'axios'

import LaunchIcon from '@mui/icons-material/Launch';
import Checkbox from '@mui/material/Checkbox';

// ユーザ一覧リスト
export default function List() {

    // リスト表示データ
    const [datas,setDatas] = useState()

    // リロード時に実行
    useEffect(() => {

        // APIを呼び出し
        axios
            .get('/api/admin/user/index')
            .then((res) => {
                setDatas(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

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

        </table>
    )
}
