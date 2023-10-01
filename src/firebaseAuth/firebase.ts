
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDqNZ2VCpABSH3ICbu9PFwYRvE6n4iTVIc",
  authDomain: "burgman-burgers.firebaseapp.com",
  databaseURL: "https://burgman-burgers-default-rtdb.firebaseio.com",
  projectId: "burgman-burgers",
  storageBucket: "burgman-burgers.appspot.com",
  messagingSenderId: "22205872197",
  appId: "1:22205872197:web:d2e79ba012ad771c9dcb2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export {app , auth };