import Form from "../parts/record/Form";

import styles from '../../../../public/scss/pages/record.module.scss'
import Graph from "../templates/record/Graph";

// 勉強記録[pages]
export default function Record() {
    return (
        <div className={styles.record}>

            {/* グラフ */}
            <Graph />

        </div>
    )
}
