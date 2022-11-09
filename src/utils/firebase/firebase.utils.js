import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC27BrmHSdWHUSK4UsHA49LgnJ2iTziDsk",
  authDomain: "crwn-clothing-89b5c.firebaseapp.com",
  projectId: "crwn-clothing-89b5c",
  storageBucket: "crwn-clothing-89b5c.appspot.com",
  messagingSenderId: "556663679781",
  appId: "1:556663679781:web:8de6b3c31f0457dc1588cc"
}

const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()