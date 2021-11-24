import styles from "../../styles/modules/utils.module.scss"
import Image from "next/image"

export default function Users({ users }) {
    return(
        <section className={`${styles.section}`}>
            <div className="flex justify-center items-center px-4">
                <h1 className={`${styles.title} inline-block`}>Featured locals</h1>
                <div className="flex items-center w-6 flex-shrink-0">
                    <Image
                        src={'/assets/instagram.png'}
                        width={128}
                        height={128}
                        alt="Instagram"/>
                </div>
            </div>

            <div className="flex flex-wrap justify-center">

                {users.map(user => {
                    return (
                        <div key={user.username} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-secondary text-primary p-2 m-2 rounded flex flex-col items-center justify-between shadow">
                            <h1 className="text-center text-lg font-bold">{user.name}</h1>
                            <a className="text-center text-sm" href={`https://instagram.com/${user.username}/`}
                               target="_blank" rel="noreferrer">@{user.username}</a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
