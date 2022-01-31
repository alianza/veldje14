import { getDatabase, limitToLast, onValue, orderByChild, push, query, ref } from "firebase/database"

export const getUpdates = () => {
  const database = getDatabase()

  const dbRefObject = query(ref(database,`updates`), orderByChild("timestamp"), limitToLast(10))

  return new Promise((resolve => {
    onValue(dbRefObject, snapshot => {
      resolve(snapshot)
    })
  }))
}

export const pushUpdate = update => {
  const db = getDatabase();
  push(ref(db, 'updates'), update)
}
