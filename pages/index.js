import { useEffect, useState } from "react"
import names from '../data/names.json'
import PropTypes from "prop-types"
import Layout from "../components/layout/layout"

export async function getServerSideProps() {
    return {
        props: {
            names
        },
    }
}

export default function Home(names) {
    const [name, setName] = useState(names.names[0])

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = names.names.indexOf(name) + 1
            const nextName = names.names[nextIndex]
            setName(nextName || names.names[0])
        }, 2500)
        return () => clearInterval(interval)
    }, [name])

    return (
        <Layout>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Welcome to{' '}
                    <a className="text-blue-600" href="https://goo.gl/maps/E1F2CHLvFz5oSwBKA">
                        {name}
                    </a>
                </h1>
            </main>

            <section className="w-full mobile:w-2/3 desktop:!w-1/2 mb-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1218.6393893120323!2d4.950849600000009!3d52.34722890000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x75155c8f7354f5cf!2sVeldje%2014!5e0!3m2!1snl!2snl!4v1637541546333!5m2!1snl!2snl"
                    style={{border: '0', width: '100%', height: '400px'}}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-2xl"/>
            </section>

            <footer className="flex items-center justify-center w-full h-24 border-t">
                Author: &nbsp;
                <a href="https://jwvbremen.nl/" target="_blank" rel="noreferrer">Jan-Willem van Bremen</a>
            </footer>
        </Layout>
    )
}

Home.propTypes = {
    names: PropTypes.array.isRequired
}
