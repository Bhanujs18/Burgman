
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {collection, getDocs, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKtgvutFSuxi_xxz61Nxv-Sf-VEB6OLpo",
  authDomain: "burgman-52a82.firebaseapp.com",
  projectId: "burgman-52a82",
  storageBucket: "burgman-52a82.appspot.com",
  messagingSenderId: "336005681940",
  appId: "1:336005681940:web:4f3154288bb018cc00a801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


initializeApp(firebaseConfig);
const db = getFirestore();

const colRef = collection(db,'orders');
getDocs(colRef).then((snapshot)=>{
  console.log(snapshot.docs)
}).catch(
  (err)=>{
  console.log(err)
})


export {app , auth };