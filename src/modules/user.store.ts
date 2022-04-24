import { derived } from 'svelte/store'
import { query, collection } from 'firebase/firestore'

import { authUser } from './auth'
import { db, intoStore } from './firebase'

import type { User } from '../types/User'

export const usersRef = query(collection(db, 'users'))
export const users = intoStore<User>(usersRef)

export const currentUser = derived([users, authUser], ([$users, $authUser]) =>
	$users.find((u) => u.id === $authUser?.id)
)

export const nameOf = (id: string, users: User[]) => users?.find((u) => u.id === id)?.name
