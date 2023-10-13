import { collection, addDoc, deleteDoc, doc } from "firebase/firestore"
import { useReducer } from "react"
import { appFireStore, timestamp } from "../firebase/config"


const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case 'addDoc':
            return { isPending: false, document: action.payload, success: true, error: null }
        case 'error':
            return { isPending: false, document: null, success: false, error: action.payload }
        case 'isPending':
            return { isPending: true, document: null, success: false, error: null }
        case 'deleteDoc':
            return { isPending: false, document: null, success: true, error: null }
        default: return state
    }
}

export const useFirestore = (transaction) => {

    const [response, dispatch] = useReducer(storeReducer, initState);

    // 컬랙션의 참조값
    const colRef = collection(appFireStore, transaction);

    const addDocument = async (doc) => {
        try {
            const createdTime = timestamp.fromDate(new Date());
            // 도큐먼트의 참조값
            const docRef = await addDoc(colRef, { ...doc, createdTime });
            dispatch({ type: 'addDoc', payload: docRef });
        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }
    }

    const deleteDocument = async (id) => {
        try {
            const docRef = await deleteDoc(doc(colRef, id));
            dispatch({ type: 'deleteDoc', payload: docRef });
        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }
    }

    return { addDocument, deleteDocument, response }

}