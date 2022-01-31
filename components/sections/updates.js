import styles from "../../styles/modules/utils.module.scss"
import { useEffect, useState } from "react"
import { getFormattedDate } from "../../lib/getFormattedDate"
import { getUpdatesRef, pushUpdate } from "../../firebase/firebaseService"
import { onValue } from "firebase/database"

const texts = {
  dry: "Dry 🏜️",
  wet: "Wet 🌧️",
}

export default function Updates() {
  const [updates, setUpdates] = useState([])
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    onValue(getUpdatesRef(), snapshot => {
      setUpdates(snapshot.val())
    })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    e.target.reset()
    const update = {
      name: formData.get("name"),
      dry: formData.get("dry") === "true",
      message: formData.get("message"),
      timestamp: Date.now()
    }
    pushUpdate(update)
    showSubmittedMessage()
  }

  const showSubmittedMessage = () => {
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      document.getElementById("latestUpdates").scrollIntoView({ behavior: "smooth" })
    }, 5000)
  }

  return(
    <section className={`${styles.section} ${styles.withPadding} w-full mobile:w-2/3 desktop:!w-1/2 my-12`}>
      <h1 id="latestUpdates" className={`${styles.title}`}>Latest updates</h1>

      <div className="flex flex-col gap-4 max-h-[480px] overflow-y-auto items-center">
        {
          updates ? Object.values(updates).reverse().map(update => (
            <div key={update.timestamp}>
              <h2>Name: {update.name}</h2>
              <p>{getFormattedDate(new Date(update.timestamp))}</p>
              <p>The park is <b>{update.dry ? texts.dry : texts.wet}</b></p>
              <p>{update.message}</p>
            </div>
          )) : <span className="text-center">No Updates yet...</span>
        }
      </div>

      <div>
        <h1 className={`${styles.title}`}>Post a new Update</h1>
        <span className="block mb-2">Post a new update letting other skaters know if the skatepark is dry or not!</span>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <label className="mr-2" htmlFor="name">Name:</label>
          <input className="grow p-2 rounded bg-accent-2" id="name" type="text" placeholder="Name" name="name" required/>
        </div>
        <div className="flex items-center">
          <span className="mr-2" >Is the park dry?:</span>
          <fieldset className="inline-block">
            <div className="inline-flex flex-nowrap items-center">
              <input className="mr-1" id="dry" type="radio" name="dry" value="true" required/>
              <label className="mr-4" htmlFor="dry">{texts.dry}</label>
            </div>
            <div className="inline-flex flex-nowrap items-center">
              <input className="mr-1" id="wet" type="radio" name="dry" value="false" required/>
              <label htmlFor="wet">{texts.wet}</label>
            </div>
          </fieldset>
        </div>
        <div className="flex items-top">
          <label className="mr-2" htmlFor="message">Extra message:</label>
          <textarea className="grow p-2 rounded bg-accent-2" id="message" name="message" placeholder="Message"/>
        </div>
        {submitted && <span>Thank you for letting everybody know the status of the skatepark at the moment, your service is much appreciated!</span>}
        <button className="bg-accent-2 py-2 hover:bg-accent-1 transition transition-colors duration-250 rounded" type="submit">Send!</button>
      </form>
      </div>
    </section>
  )
}
