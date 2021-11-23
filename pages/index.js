import styles from '../styles/pages/home/home.module.scss'
import { useEffect, useState } from "react"
import names from '../data/names.json'
import users from '../data/users.json'
import PropTypes from "prop-types"
import Layout from "../components/layout/layout"

export async function getServerSideProps() {
    return {
        props: {
            names,
            users
        },
    }
}

export default function Home(props) {
    const [name, setName] = useState(props.names[0])

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = props.names.indexOf(name) + 1
            const nextName = props.names[nextIndex]
            setName(nextName || props.names[0])
        }, 2000)
        return () => clearInterval(interval)
    }, [name])

    useEffect(() => {
        document.querySelectorAll('video').forEach(video => { video.playbackRate = .5 })
    }, [])

    useEffect(() => {
        const main = document.querySelector('main')
        const timeout = setTimeout(() => {
            main.classList.remove('min-h-screen')
            main.classList.add('min-h-[216px]')
        }, 2500)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <Layout>
            <main className="flex flex-col items-center justify-center w-full flex-1 p-12 text-center min-h-screen transition-all duration-1000 ease-out">
                <h1 className="text-4xl xs:text-6xl font-bold">
                    Welcome to <br />
                    <a className="text-blue-600" href="https://goo.gl/maps/E1F2CHLvFz5oSwBKA">
                        {name}
                    </a>
                </h1>
            </main>

            <section className={`${styles.section} flex justify-between flex-col mobile:flex-row`}>
                <video className={styles.video} autoPlay muted loop src="assets/jw.mp4"/>
                <video className={styles.video} autoPlay muted loop src="assets/seep.mp4"/>
                <video className={styles.video} autoPlay muted loop src="assets/nelda.mp4"/>
            </section>

            <section className={`${styles.section} p-4`}>
                <p>Skatepark Middemeer, also known as Veldje 14 or Veldoe is small a concrete skatepark in the Amsterdam-East/Watergraafsmeer area.
                    The skatepark has been built in 2004 and since then been revamped and renovated multiple times.
                </p>
                <p className="mt-2">
                    The park features concrete obstacles of which a manual pad, high square rail, low curved round rail,
                    different quarter pipes, a large bank, small hips, a center fun-box and some movable obstacles like a round rail and bench.
                    The park is dimly lit at night from one direction. The park is open 24 hours a day, 7 days a week.
                </p>
                <p className="mt-2">
                    Check out the <a href="https://www.amsterdam.nl/sport/skateparken/alle-skateparken/skatepark-middenmeer-veldje14/" target="_blank" rel="noreferrer">official listing</a>
                    &nbsp;of the skatepark on the <a href="https://www.amsterdam.nl/" target="_blank" rel="noreferrer">Amsterdam.nl</a> website.
                </p>
            </section>

            <section className={`${styles.section}`}>
                <h1 className="text-center mb-4">Impression video by Sep Toscani</h1>
                <div className="pb-[56.25%] relative h-0">
                        <iframe src="https://player.vimeo.com/video/288406922?h=4422620a91&portrait=0" frameBorder="0"
                                className="top-0 left-0 w-full h-full absolute"
                                allow="autoplay; fullscreen; picture-in-picture" allowFullScreen/>
                    <script src="https://player.vimeo.com/api/player.js"/>
                </div>
            </section>

            <section className={`${styles.section}`}>
                <h1 className="text-center my-4">Featured locals</h1>
                <div className="flex flex-wrap justify-center">

                    {props.users.map(user => {
                        return (
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-secondary text-primary p-2 m-2 rounded">
                                <div className="flex flex-col items-center">
                                    <h3 className="text-center text-lg font-bold">{user.name}</h3>
                                    <a className="text-center text-sm" href={`https://instagram.com/${user.username}/`}
                                       target="_blank" rel="noreferrer">@{user.username}</a>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </section>

            <section className={`${styles.section} w-full mobile:w-2/3 desktop:!w-1/2 my-12`}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1218.6393893120323!2d4.950849600000009!3d52.34722890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x75155c8f7354f5cf!2sVeldje%2014!5e0!3m2!1snl!2snl!4v1637541546333!5m2!1snl!2snl"
                    allowFullScreen
                    loading="lazy"
                    className="rounded-2xl border-none w-full h-[400px]"/>
            </section>

            <footer className="flex items-center align-middle justify-between w-full h-24 border-t px-4">
                <span> Location: <a href="https://goo.gl/maps/Cz6mHoVYugdGnnaK6" target="_blank" rel="noreferrer">Middenmeerpad 7, 1098 SM Amsterdam</a></span>
                <span> Author: <a href="https://jwvbremen.nl/" target="_blank" rel="noreferrer">Jan-Willem van Bremen</a></span>
            </footer>
        </Layout>
    )
}

Home.propTypes = {
    names: PropTypes.array.isRequired
}
