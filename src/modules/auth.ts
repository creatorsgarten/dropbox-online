import { readable } from 'svelte/store'

import {
	getAuth,
	signInWithPopup,
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

export const loginWithGoogle = () => signInWithPopup(auth, google)

export const logout = () => signOut(auth)

const s = (text: string | object) => text.toString()

export const authUser = readable<AuthUser>(null, (set) => {
	return auth.onAuthStateChanged(async (u) => {
		if (!u) return set(null)

		const { claims } = await u.getIdTokenResult()

		set({
			id: s(claims.user_id),
			name: s(claims.name),
			email: s(claims.email),
			photo: s(claims.picture)
		})
	})
})
