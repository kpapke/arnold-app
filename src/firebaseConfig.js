import firebase from 'firebase'
import 'firebase/firestore/dist/index.cjs'

// firebase init
const config = {
  apiKey: 'AIzaSyCPPWnSGLnTt302SrLjkSoE8vJaBDVXllE',
  authDomain: 'vuefire-f2ffb.firebaseapp.com',
  databaseURL: 'https://vuefire-f2ffb.firebaseio.com',
  projectId: 'vuefire-f2ffb',
  storageBucket: 'vuefire-f2ffb.appspot.com',
  messagingSenderId: '844336305127'
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
const usersCollection = db.collection('users')

export {
  db,
  auth,
  currentUser,
  attributesCollection,
  classesCollection,
  colorsCollection,
  usersCollection
}
