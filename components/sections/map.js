import styles from "../../styles/modules/utils.module.scss"

export default function Map() {
    return(
        <section className={`${styles.section} w-full mobile:w-2/3 desktop:!w-1/2 my-12`}>
            <h1 className={`${styles.title}`}>Map</h1>
            <iframe title="Google Map - Veldje 14"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1218.6393893120323!2d4.950849600000009!3d52.34722890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x75155c8f7354f5cf!2sVeldje%2014!5e0!3m2!1snl!2snl!4v1637541546333!5m2!1snl!2snl"
                    allowFullScreen
                    loading="lazy"
                    className="rounded-2xl border-none w-full h-[400px] shadow-xl"/>
        </section>
    )
}
