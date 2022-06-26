import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBjVPoFwOzqiij-7Fxwo-n7gtZyqov2q4g",
    authDomain: "todo-c4213.firebaseapp.com",
    projectId: "todo-c4213",
    storageBucket: "todo-c4213.appspot.com",
    messagingSenderId: "987916631113",
    appId: "1:987916631113:web:b89589ba0a1bba40491398",
    measurementId: "G-KY4G8FK76B"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);