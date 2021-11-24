import { useEffect, useState } from "react"

export default function Header({names}) {
    const [name, setName] = useState(names[0])

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = names.indexOf(name) + 1
            const nextName = names[nextIndex]
            setName(nextName || names[0])
        }, 2000)
        return () => clearInterval(interval)
    }, [name])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        const header = document.querySelector('header')
        const timeout = setTimeout(() => {
            header.classList.remove('h-screen')
            header.style.height = 'calc(15vmax + 6em)'
            header.querySelector('span').remove()
        }, 2500)
        return () => clearTimeout(timeout)
    }, [])

    return(
        <header
            className="flex flex-col items-center justify-center w-full text-center h-screen transition-all duration-1000 ease-in-out overflow-hidden relative">
            <h1 className="text-[5.4vmax] leading-[5.4vmax] font-bold">
                Welcome to
            </h1>
            <h1 className="text-[5.4vmax] leading-[5.4vmax] font-bold"><a className="text-blue-600" href="https://goo.gl/maps/E1F2CHLvFz5oSwBKA">{name}</a></h1>
            <span className="absolute bottom-4">Website by: <strong className="underline">
                <a href="https://jwvbremen.nl/" target="_blank" rel="noreferrer">Jan-Willem van Bremen</a></strong>
            </span>
        </header>
    )
}
