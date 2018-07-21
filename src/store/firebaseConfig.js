import 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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
const attributesCollection = db.collection('attributes')
const buildingsCollection = db.collection('buildings')
const classesCollection = db.collection('classes')
const colorsCollection = db.collection('colors')
const eventsCollection = db.collection('events')
const hostsCollection = db.collection('hosts')
const locationsCollection = db.collection('locations')
const maxPotentialsCollection = db.collection('maxPotentials')
const propsCollection = db.collection('props')
const reveriesCollection = db.collection('reveries')
const rolesCollection = db.collection('roles')
const usersCollection = db.collection('users')

const collections = {
  attributes: attributesCollection,
  buildings: buildingsCollection,
  classes: classesCollection,
  colors: colorsCollection,
  events: eventsCollection,
  hosts: hostsCollection,
  locations: locationsCollection,
  maxPotentials: maxPotentialsCollection,
  props: propsCollection,
  reveries: reveriesCollection,
  roles: rolesCollection,
  users: usersCollection
}

export { db, auth, currentUser, collections }
