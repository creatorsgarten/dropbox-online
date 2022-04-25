import { derived, get } from 'svelte/store'
import { query, collection, setDoc, doc } from 'firebase/firestore'

import { authUser } from './auth'
import { db, intoStore } from './firebase'

import type { User } from '../types/User'

export const usersRef = collection(db, 'users')
export const usersQuery = query(usersRef)
export const users = intoStore<User>(usersQuery)

export const currentUser = derived([users, authUser], ([$users, $authUser]) =>
	$users.find((u) => u.id === $authUser?.id)
)

export function setUser(user: Partial<User>) {
	const auth = get(authUser)
	const userDoc = doc(usersRef, auth.id)

	return setDoc(userDoc, user, { merge: true })
}

export const nameOf = (id: string, users: User[]) => users?.find((u) => u.id === id)?.name
