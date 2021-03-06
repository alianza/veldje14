import styles from "../../styles/modules/utils.module.scss"

export default function Markdown({ markdown }) {
    return(
        <section className={`${styles.section} ${styles.withPadding}`} dangerouslySetInnerHTML={{ __html: markdown }} />
    )
}
