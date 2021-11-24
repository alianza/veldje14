import styles from "../../styles/modules/utils.module.scss"
import { useEffect } from "react"

export default function Images() {

    useEffect(() => {
        document.querySelectorAll('#images video').forEach(video => { video.playbackRate = .5 })

        const timeout = setTimeout(() => {
            document.querySelectorAll('#images video').forEach(video => { video.play() })
        }, 2500)

        return () => clearTimeout(timeout)
    }, [])

    return(
        <section id="images" className={`${styles.section} flex justify-between flex-col mobile:flex-row`}>
            <video className={styles.video} muted loop>
                <source src="assets/slideshows/jw.webm" type="video/webm" />
                <source src="assets/slideshows/jw.mp4" type="video/mp4" />
            </video>
            <video className={styles.video} muted loop>
                <source src="assets/slideshows/seep.webm" type="video/webm" />
                <source src="assets/slideshows/seep.mp4" type="video/mp4" />
            </video>
            <video className={styles.video} muted loop>
                <source src="assets/slideshows/nelda.webm" type="video/webm" />
                <source src="assets/slideshows/nelda.mp4" type="video/mp4" />
            </video>
        </section>
    )
}
