import styles from '../../../../public/scss/templates/header.module.scss';
import Icon from '../parts/header/Icon';
import Link from '../parts/header/Link';

export default function Header() {
    return (
        <div className={styles.header}>
            Header

            {/* リンク一覧 */}
            <Link />

            {/* ユーザアイコン */}
            <Icon />

        </div>
    )
}
