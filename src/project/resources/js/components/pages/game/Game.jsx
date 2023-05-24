import styles from '../../../../../public/scss/pages/game.module.scss'
import Typing from '../../templates/game/Typing'

// ゲームページ
export default function Game() {
    return (
        <div className={styles.game}>

            {/* タイピングゲーム */}
            <Typing />
        </div>
    )
}
