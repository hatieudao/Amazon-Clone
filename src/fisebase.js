import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAfPqruXVXDlr0GvvyM4S2U_eQ_zhhR3LI',
  authDomain: 'clone-9e446.firebaseapp.com',
  projectId: 'clone-9e446',
  storageBucket: 'clone-9e446.appspot.com',
  messagingSenderId: '763848458252',
  appId: '1:763848458252:web:e31dc59854a764a3b6ae29',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
