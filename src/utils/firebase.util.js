import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC3XLZK7tCPjNd5nO1sp4ySf7LWq-uSTOI",
  authDomain: "gohan-54abf.firebaseapp.com",
  projectId: "gohan-54abf",
  storageBucket: "gohan-54abf.appspot.com",
  messagingSenderId: "620760384955",
  appId: "1:620760384955:web:9ba41e0be14c727c4a309e",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth) =>{
    const userDocRef = doc(db, 'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef, {
                displayName,
                email,createdAt
            })
        }catch(message){
            console.log('There was an error', message)
        }
    }
    return userDocRef;
}