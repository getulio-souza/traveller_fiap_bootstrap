import app from "./firebase-app.js";
import {getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToTraveller(subscription) {
    // debugger
    const db = getFirestore(app)
    const travellerCollection = collection(db, 'usuario_traveller')
    const docRef = await addDoc(travellerCollection, subscription)
    return docRef.id
    }