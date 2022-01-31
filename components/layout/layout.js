import Head from "next/head"
import { useEventListeners } from "../../lib/eventListeners"
import Header from "../sections/Header"
import Footer from "./footer"

export default function Layout({ names, children }) {

    useEventListeners()

    return (
        <div id="app">
            <Head>
                <title>Skatepark Middenmeer</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Team Rockstars IT Tech Case statically rendered with Next.js"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
                <link rel="manifest" href="/manifest.webmanifest"/>
                <script defer async src="https://www.googletagmanager.com/gtag/js?id=G-3VL3JR8MM1"/>
                <script defer dangerouslySetInnerHTML={{__html:
                       `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-3VL3JR8MM1', { page_path: window.location.pathname });`}}/>
            </Head>

            <Header names={names}/>

            <div id="content" className="min-h-screen">{children}</div>

            <Footer/>

        </div>)
}
