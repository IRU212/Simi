import styles from '../../../../public/scss/templates/header.module.scss';
import Icon from '../parts/header/Icon';
import MainLink from '../parts/header/Link';
import Name from '../parts/header/Name';
import PostLink from '../parts/header/PostLink';
import TopLink from '../parts/header/TopLink';

export default function Header() {
    return (
        <div className={styles.header}>

            {/* トップリンク */}
            <TopLink />

            {/* リンク一覧 */}
            <MainLink />

            {/* 作成リンク一覧 */}
            <PostLink />

            <div className={styles.profileInfo}>

                {/* ユーザアイコン */}
                <Icon />

                {/* ユーザ名 */}
                <Name />

            </div>

        </div>
    )
}
