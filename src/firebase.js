// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseapp = firebase.initializeApp({
  //put your firebase config details here

})

const db = firebaseapp.firestore()
const storage = firebase.storage()
const auth = firebase.auth()

export { db, storage, auth }
