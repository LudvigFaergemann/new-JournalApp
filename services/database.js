
import { auth } from './firebase.js';

import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import app from './firebase';

const db = getFirestore(app);

export const journalsRef = collection(db, "journals");

export const addJournal = async (newJournalEntry) => {
  if (newJournalEntry.trim() !== "") {
    await addDoc(journalsRef, {
      text: newJournalEntry,
      createdAt: serverTimestamp(),
      userId: auth.currentUser.uid, 
    });
  }
};

export default db;
