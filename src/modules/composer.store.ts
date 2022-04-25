import { addDoc } from 'firebase/firestore'
import { writable, get } from 'svelte/store'

import { authUser } from './auth'
import { notesRef } from './notes.store'
import { fromStorage } from './design.composer'

interface ComposerState {
  open: boolean
  receiver: string | null
  message: string
  background: string | null
}

const defaultComposerState: ComposerState = {
  open: false,
  receiver: null,
  message: '',
  background: ''
}

export const composer = writable(defaultComposerState)

export const openComposer = (userId: string) =>
  composer.update((u) => ({ ...u, open: true, receiver: userId }))

export const closeComposer = () => composer.update((u) => ({ ...u, open: false }))

export const setNoteBackground = (background: string) =>
  composer.update((u) => ({ ...u, background }))

export const setNoteBackdrop = (src: string) => setNoteBackground(fromStorage(`backdrop/${src}`))

export async function sendMessage() {
  const auth = get(authUser)
  const state = get(composer)

  await addDoc(notesRef, { from: auth.id, to: state.receiver, message: state.message })

  composer.set(defaultComposerState)
}
