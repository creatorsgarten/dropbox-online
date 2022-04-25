import { initializeApp } from 'firebase/app'

import { readable } from 'svelte/store'
import { type Query, onSnapshot, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const config = {
  apiKey: 'AIzaSyBSaj6lX5QJyZsGoslKzrF2704fhiRfYVg',
  authDomain: 'camp-dropbox.firebaseapp.com',
  projectId: 'camp-dropbox',
  storageBucket: 'camp-dropbox.appspot.com',
  messagingSenderId: '1004894565543',
  appId: '1:1004894565543:web:7ccb81da5f835fb45bd782',
  measurementId: 'G-31T5MZZMJ8'
}

export const app = initializeApp(config, 'app')
export const db = getFirestore(app)
export const storage = getStorage(app)

type ID = { id: string }

export const intoStore = <T>(query: Query) =>
  readable<(T & ID)[]>([], (set) => {
    onSnapshot(query, (snap) => {
      set(snap?.docs?.map((doc) => ({ ...doc.data(), id: doc.id } as T & ID)))
    })
  })
