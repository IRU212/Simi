import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import styles from '../../../../../public/scss/parts/profile.module.scss'

// プロフィール編集　設定　リンクボタン
export default function SettingButton() {
    return (
        <Link to="/setting/profile">
            <SettingsIcon className={styles.settingButton} />
        </Link>
    )
}
