import { derived, get, type Readable } from 'svelte/store'
import {
  query,
  collection,
  setDoc,
  doc,
  getDoc,
  CollectionReference,
  onSnapshot
} from 'firebase/firestore'

import { authUser } from './auth'
import { db, intoStore } from './firebase'

import type { User } from '../types/User'

export const usersRef = collection(db, 'users') as CollectionReference<User>
export const usersQuery = query(usersRef)
export const users = intoStore<User>(usersQuery)

export const currentUser: Readable<User> = derived([authUser], ([auth], set) => {
  if (!auth) return set(null)

  const userRef = doc(usersRef, auth.id)

  return onSnapshot(userRef, async (user) => {
    if (!user.exists()) {
      await setDoc(userRef, { id: auth.id, name: null, photo: null, instagram: null })
    }

    set(user.data())
  })
})

export function setUser(user: Partial<User>) {
  const auth = get(authUser)
  const userDoc = doc(usersRef, auth.id)

  return setDoc(userDoc, user, { merge: true })
}

export const nameOf = (id: string, users: User[]) => users?.find((u) => u.id === id)?.name
