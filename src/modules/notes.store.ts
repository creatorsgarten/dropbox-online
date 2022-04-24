import { query, collection } from 'firebase/firestore'

import { db, intoStore } from './firebase'

interface Note {
	from: string
	message: string
}

const notesRef = query(collection(db, 'notes'))
export const notes = intoStore<Note>(notesRef)
