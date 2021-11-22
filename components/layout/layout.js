import Head from "next/head"
import { useEffect, useState } from "react"
import localStorageService from "../../lib/services/localStorageService"
import useTheme from "../../lib/theme"
import { useEventListeners } from "../../lib/eventListeners"

const darkThemeKey = 'darkTheme'

export default function Layout({ children }) {
    const [darkTheme, setDarkTheme] = useState(false)

    useEffect(() => { setDarkTheme(localStorageService.getValue(darkThemeKey)) })

    useTheme(darkTheme)

    useEventListeners()

    const toggleTheme = () => { localStorageService.setKeyValue(darkThemeKey, !darkTheme); setDarkTheme(!darkTheme) }

    return (
        <div id="app">
            <Head>
                <title>Skatepark Middemeer</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Team Rockstars IT Tech Case statically rendered with Next.js"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
                <link rel="manifest" href="/manifest.json"/>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-3VL3JR8MM1"/>
                <script>{`  window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-3VL3JR8MM1', { page_path: window.location.pathname }); `}</script>
            </Head>

            <div id="content" className="flex flex-col items-center justify-center min-h-screen py-2">{children}</div>

        </div>)
}