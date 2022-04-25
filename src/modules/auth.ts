import { readable } from 'svelte/store'

import {
	getAuth,
	signInWithRedirect,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth'

import { app } from './firebase'

import type { AuthUser } from '../types/User'

const auth = getAuth(app)
const google = new GoogleAuthProvider()

export const loginWithEmail = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password)

export const loginWithGoogle = () => signInWithRedirect(auth, google)

export const logout = () => signOut(auth)

export const authUser = readable<AuthUser>(null, (set) => {
	return auth.onAuthStateChanged(async (u) => {
		if (!u) return set(null)

		await u.getIdTokenResult()

		set({ id: u.uid, email: u.email, photo: u.photoURL, name: u.displayName })
	})
})
