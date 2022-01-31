import { getDatabase, limitToLast, onValue, orderByChild, push, query, ref } from "firebase/database"


export const getUpdatesRef = () => {
  const db = getDatabase()

  const dbRefObject = query(ref(db,`updates`), orderByChild("timestamp"), limitToLast(10))

  return dbRefObject
}

export const getUpdates = () => {
  return new Promise((resolve => {
    onValue(getUpdatesRef(), snapshot => {
      resolve(snapshot.val())
    })
  }))
}

export const pushUpdate = update => {
  const db = getDatabase()

  push(ref(db, 'updates'), update)
}
