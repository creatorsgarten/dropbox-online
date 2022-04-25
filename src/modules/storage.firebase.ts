import { ref, getDownloadURL } from 'firebase/storage'

import { storage } from './firebase'

export const getPath = (path: string) => getDownloadURL(ref(storage, path))
