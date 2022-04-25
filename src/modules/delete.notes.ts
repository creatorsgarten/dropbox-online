import { doc, deleteDoc } from 'firebase/firestore'

import { notesRef } from './notes.store'

export const deleteNote = (id: string) => deleteDoc(doc(notesRef, id))
