import { getPath } from './storage.firebase'

const STORAGE_KEY = 'storage#'

export const fromStorage = (src: string) => STORAGE_KEY + src
export const toStorage = (src: string) => src.replace(STORAGE_KEY, '')
export const isStorage = (src: string | null) => src?.startsWith(STORAGE_KEY)

export const toURL = (src: string) => getPath(toStorage(src))
