
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAV1mwNZSt6xC0EXEwPCEFkDujeGLsr35E",
    authDomain: "piccantino-17c7d.firebaseapp.com",
    projectId: "piccantino-17c7d",
    storageBucket: "piccantino-17c7d.appspot.com",
    messagingSenderId: "758766953492",
    appId: "1:758766953492:web:a9eee7480e50e7958c7301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app;
}
