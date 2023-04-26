// parts 呼び出し
import NowTime from '../../parts/record/NowTime'
import TimeRecord from '../../parts/record/TimeRecord'

export default function Time() {
    return (
        <div>

            {/* 勉強時間計測 */}
            <TimeRecord />

            {/* 現在時刻表示 */}
            {/* <NowTime /> */}

        </div>
    )
}
