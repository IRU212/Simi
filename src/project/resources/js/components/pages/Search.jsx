import styles from '../../../../public/scss/pages/search.module.scss'

import SearchList from '../templates/search/SearchList'

// 検索ページ
export default function Search() {
    return (
        <div className={styles.search}>

            {/* 検索結果リスト */}
            <SearchList />
        </div>
    )
}
