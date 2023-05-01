import styles from '../../../../../public/scss/templates/search.module.scss'
import ListHeader from '../../parts/search/ListHeader'
import List from '../../parts/search/List'
import Form from '../../parts/search/Form'

export default function SearchList() {
    return (
        <div className={styles.searchList}>

            {/* 検索フォーム */}
            <Form />

            {/* 検索リストヘッダー */}
            <ListHeader />

            {/* 検索結果リスト */}
            <List />

        </div>
    )
}
