import styles from '../../../../../public/scss/parts/record.module.scss'

// サブタイトル
export default function SubTitle(props) {

    return (
        <div className={styles.subTitle}>
            { props.name }
        </div>
    )
}
