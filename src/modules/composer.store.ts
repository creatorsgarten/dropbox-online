import { writable, get } from 'svelte/store'

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
