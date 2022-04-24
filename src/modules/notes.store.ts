import { derived, type Readable } from 'svelte/store'
import { query, collection, where, onSnapshot } from 'firebase/firestore'

import { db } from './firebase'
import { authUser } from './auth'

import type { Note } from '../types/Note'

const notesRef = collection(db, 'notes')

export const notes: Readable<Note[]> = derived(
	[authUser],
	([user], set) => {
		// if (!user) return

		const notesQuery = query(notesRef, where('to', '==', user.id))

		onSnapshot(notesQuery, (snapshot) => {
			set(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Note)))
		})
	},
	[]
)
