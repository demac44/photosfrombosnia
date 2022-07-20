import { initializeApp, cert } from 'firebase-admin/app';
import admin from "firebase-admin"
import { getFirestore } from "firebase-admin/firestore"
import serviceAccount from "./serviceAccountKey.json"


try{

  initializeApp({
    credential: cert(serviceAccount)
  });
}
catch(e){}

const db = getFirestore();


export default db