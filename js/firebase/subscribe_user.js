import app from "./app";
import { getFirestore, collection, addDoc} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

export async function subscribeUser(subscription) {
    const db = getFirestore(app)
    const travellerUserCollection = collection(db,"usuario_traveller")
    const docRef = await addDoc(travellerUserCollection, subscription)
    return docRef.id
}