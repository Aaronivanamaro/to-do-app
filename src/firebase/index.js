import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAC0dbe6kltYyK4xEmVzLelMc3ZKQiOok4",
    authDomain: "todo-app-e9356.firebaseapp.com",
    projectId: "todo-app-e9356",
    storageBucket: "todo-app-e9356.appspot.com",
    messagingSenderId: "1057972825260",
    appId: "1:1057972825260:web:d85f2c78cf51a603244309"
}

firebase.initializeApp(firebaseConfig)

export default firebase