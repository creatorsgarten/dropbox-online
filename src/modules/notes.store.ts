import { query, collection, where, CollectionReference } from 'firebase/firestore'

import { db } from './firebase'
import { createQueryStore } from './query.firebase'

import type { Note } from '../types/Note'

export const notesRef = collection(db, 'notes') as CollectionReference<Omit<Note, 'id'>>

export const inbox = createQueryStore<Note>((id) => query(notesRef, where('to', '==', id)))

export const outbox = createQueryStore<Note>((id) =>
  query(notesRef, where('from', '==', id), where('to', '!=', id))
)
