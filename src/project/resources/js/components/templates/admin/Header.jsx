import styles from '../../../../../public/scss/templates/admin/header.module.scss'
import MainHeader from './MainHeader';
import SideHeader from './SideHeader';

// ヘッダー
export default function Header() {
    return (
        <div className={styles.header}>

            {/* サイドヘッダー */}
            <SideHeader />

            {/* メインヘッダー */}
            <MainHeader />

        </div>
    );
}
