import { addDoc } from 'firebase/firestore'
import { writable, get } from 'svelte/store'

import { authUser } from './auth'

import { notesRef } from './notes.store'

interface ComposerState {
	open: boolean
	receiver: string | null
	message: string
}

const defaultComposerState: ComposerState = {
	open: false,
	receiver: null,
	message: ''
}

export const composer = writable(defaultComposerState)

export function openComposer(userId: string) {
	composer.set({ ...get(composer), open: true, receiver: userId })
}

export const closeComposer = () => composer.set({ ...get(composer), open: false })

export async function sendMessage() {
	const auth = get(authUser)
	const state = get(composer)

	await addDoc(notesRef, { from: auth.id, to: state.receiver, message: state.message })

	closeComposer()
}
