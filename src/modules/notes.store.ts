import { derived, type Readable } from 'svelte/store'

import { query, collection, where, onSnapshot, CollectionReference } from 'firebase/firestore'

import { db } from './firebase'
import { authUser } from './auth'

import type { Note } from '../types/Note'

export const notesRef = collection(db, 'notes') as CollectionReference<Omit<Note, 'id'>>

export const notes: Readable<Note[]> = derived(
	[authUser],
	([user], set) => {
		if (!user) return set([])

		const notesQuery = query(notesRef, where('to', '==', user.id))

		return onSnapshot(notesQuery, (snapshot) => {
			set(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
		})
	},
	[]
)
