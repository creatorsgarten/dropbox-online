import { initializeApp } from 'firebase/app'

import { readable } from 'svelte/store'
import { type Query, onSnapshot, getFirestore } from 'firebase/firestore'

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

export const intoStore = <T>(query: Query) =>
	readable<T[]>([], (set) => {
		onSnapshot(query, (snap) => set(snap.docs.map((doc) => doc.data() as T)))
	})
