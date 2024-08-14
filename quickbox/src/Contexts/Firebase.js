import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDkU8H3Bmiv9gH5biY5JHlsY3z2TDOd-dU",
    authDomain: "quickbox-945f7.firebaseapp.com",
    projectId: "quickbox-945f7",
    storageBucket: "quickbox-945f7.appspot.com",
    messagingSenderId: "858845533898",
    appId: "1:858845533898:web:f918b6800abe8c3c49c633",
    measurementId: "G-NRGY81TGBB"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth object
export const auth = getAuth(app);
