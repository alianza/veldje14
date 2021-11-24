import styles from "../../styles/modules/utils.module.scss"
import impressionVideoFragment from "../../lib/constants"

export default function Video() {

    function loadImpressionVideo() {
        const videoSection = document.querySelector('#impression-video')
        videoSection.querySelector('div').remove()
        videoSection.querySelector('h1').insertAdjacentHTML('afterend', impressionVideoFragment)
    }

    return(
        <section id="impression-video" className={`${styles.section}`}>
            <h1 className={`${styles.title}`}>Impression video by Sep Toscani</h1>
            <div className="relative">
                <img src="assets/thumbnail.webp" alt="Thumbnail"/>
                <div onClick={() => loadImpressionVideo()} className="group absolute w-full h-full top-0 right-0 flex items-center justify-center">
                    <div className="cursor-pointer px-5 py-2 rounded bg-[rgba(30,30,30,.9)] group-hover:bg-[rgb(0,173,239)]">
                        <svg className="w-6 fill-[white]" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false">
                            <polygon className="fill" points="1,0 20,10 1,20"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}
