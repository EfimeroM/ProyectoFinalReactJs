import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4PtFVFQljvlJCEQyfaGk_qeQTXCLY4-8",
    authDomain: "shopcard-33bb0.firebaseapp.com",
    projectId: "shopcard-33bb0",
    storageBucket: "shopcard-33bb0.appspot.com",
    messagingSenderId: "331304061815",
    appId: "1:331304061815:web:503bcfae0ce64b8f2d6f72"
};

const app = firebase.initializeApp(firebaseConfig)


export const getFirestore = () => {
    return firebase.firestore(app)
}
