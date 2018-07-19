import firebase from 'firebase'
import 'firebase/firestore/dist/index.cjs'

// firebase init
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser
const settings = { timestampsInSnapshots: true }
db.settings(settings)

// firebase collections
const attributesCollection = db.collection('attributes').orderBy('key')
const classesCollection = db.collection('classes').orderBy('key')
const colorsCollection = db.collection('colors').orderBy('key')

export { db, auth, currentUser, attributesCollection, classesCollection, colorsCollection }
