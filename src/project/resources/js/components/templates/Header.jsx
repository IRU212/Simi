import styles from '../../../../public/scss/templates/header.module.scss';
import Icon from '../parts/header/Icon';
import MainLink from '../parts/header/Link';
import TopLink from '../parts/header/TopLink';

export default function Header() {
    return (
        <div className={styles.header}>

            {/* トップリンク */}
            <TopLink />

            {/* リンク一覧 */}
            <MainLink />

            {/* ユーザアイコン */}
            <Icon />

        </div>
    )
}
