import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocFromServer, doc, DocumentSnapshot, DocumentData } from 'firebase/firestore';

interface DocumentDayData {
    correctWords: string[];
    gameNumber: number;
}

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDb4WA4Ji0gy6Cx1_S_wMBZv0gRMAsXiNw",
    authDomain: "palavra-quadrada.firebaseapp.com",
    projectId: "palavra-quadrada",
    storageBucket: "palavra-quadrada.appspot.com",
    messagingSenderId: "998141176767",
    appId: "1:998141176767:web:a5ea6397e45d77edc60f0a",
});

const db = getFirestore();

export async function getDailyCorrectWords(date: string):Promise<DocumentDayData | undefined> {
    date = date.replaceAll('/', '-')
    const path = `days/${date}`;
    const result = await getDocFromServer(doc(db, path))
    return result.data() as DocumentDayData;
}

