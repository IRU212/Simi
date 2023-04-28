import styles from '../../../../../public/scss/parts/question.module.scss'
import { Link } from 'react-router-dom'

export default function Course() {
    return (
        <div className={styles.subject}>

            <div className={styles.titleMain}>
                科目
            </div>

            <section>

                <div className={styles.titleSub}>
                    国語
                </div>

                <Link to="/question/course/1">
                    国語総合
                </Link>
                <Link to="/question/course/2">
                    国語表現
                </Link>
                <Link to="/question/course/3">
                    現代文A
                </Link>
                <Link to="/question/course/4">
                    現代文B
                </Link>
                <Link to="/question/course/5">
                    古典A
                </Link>
                <Link to="/question/course/6">
                    古典B
                </Link>

            </section>

            <section>

                <div className={styles.titleSub}>
                    数学
                </div>

                <Link to="/question/course/7">
                    数学1
                </Link>
                <Link to="/question/course/8">
                    数学2
                </Link>
                <Link to="/question/course/9">
                    数学3
                </Link>
                <Link to="/question/course/10">
                    数学A
                </Link>
                <Link to="/question/course/11">
                    数学B
                </Link>
                <Link to="/question/course/12">
                    数学活用
                </Link>

            </section>

            <section>

                <div className={styles.titleSub}>
                    理科
                </div>

                <Link to="/question/course/13">
                    科学と人間生活
                </Link>
                <Link to="/question/course/14">
                    物理基礎
                </Link>
                <Link to="/question/course/15">
                    物理
                </Link>
                <Link to="/question/course/16">
                    化学基礎
                </Link>
                <Link to="/question/course/17">
                    科学
                </Link>
                <Link to="/question/course/18">
                    生物基礎
                </Link>
                <Link to="/question/course/19">
                    生物
                </Link>
                <Link to="/question/course/20">
                    地学基礎
                </Link>
                <Link to="/question/course/21">
                    地学
                </Link>
                <Link to="/question/course/22">
                    理科課題研究
                </Link>

            </section>

            <section>

                <div className={styles.titleSub}>
                    社会
                </div>

                <Link to="/question/course/23">
                    世界史A
                </Link>
                <Link to="/question/course/24">
                    世界史B
                </Link>
                <Link to="/question/course/25">
                    日本史A
                </Link>
                <Link to="/question/course/26">
                    日本史B
                </Link>
                <Link to="/question/course/27">
                    地学A
                </Link>
                <Link to="/question/course/28">
                    地学B
                </Link>
                <Link to="/question/course/29">
                    現代社会
                </Link>
                <Link to="/question/course/30">
                    論理
                </Link>
                <Link to="/question/course/31">
                    政治・経済
                </Link>

            </section>

            <section>

                <div className={styles.titleSub}>
                    英語
                </div>

                <Link to="/question/course/32">
                    コミュニケーション英語基礎
                </Link>
                <Link to="/question/course/33">
                    コミュニケーション英語1
                </Link>
                <Link to="/question/course/34">
                    コミュニケーション英語2
                </Link>
                <Link to="/question/course/35">
                    コミュニケーション英語3
                </Link>
                <Link to="/question/course/36">
                    英語表現A
                </Link>
                <Link to="/question/course/37">
                    英語表現B
                </Link>
                <Link to="/question/course/38">
                    英語会話
                </Link>

            </section>

        </div>
    )
}
