import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocFromServer, doc, DocumentSnapshot, DocumentData, setDoc } from 'firebase/firestore';
import { formatDate } from './DateUtils';

const daysPath = 'days';
const playsPath = 'plays';

interface DocumentDayData {
    correctWords: string[];
    gameNumber: number;
}

interface SetGuessesParam {
    uid: string;
    date: Date;
    guesses: string[];
}

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDb4WA4Ji0gy6Cx1_S_wMBZv0gRMAsXiNw",
    authDomain: "palavra-quadrada.firebaseapp.com",
    projectId: "palavra-quadrada",
    storageBucket: "palavra-quadrada.appspot.com",
    messagingSenderId: "998141176767",
    appId: "1:998141176767:web:a5ea6397e45d77edc60f0a",
});

const db = getFirestore(firebaseApp);

export async function getCorrectWordsFromServer(date: Date):Promise<DocumentDayData | undefined> {
    const dateStr = formatDateToFirebase(date);
    const path = `${daysPath}/${dateStr}`;
    const result = await getDocFromServer(doc(db, path))
    return result.data() as DocumentDayData;
}

export function sendGuessesToFirestore(params: SetGuessesParam) {
    const { guesses, uid } = params;
    const date = formatDateToFirebase(params.date);
    const path = `${daysPath}/${date}/${playsPath}`;
    setDoc(doc(db, path, uid), {
        guesses,
    });
}

function formatDateToFirebase(date: Date): string {
    return formatDate(date).replaceAll('/', '-');
}