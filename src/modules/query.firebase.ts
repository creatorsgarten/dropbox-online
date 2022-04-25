import { derived, type Readable } from 'svelte/store'
import { type Query, onSnapshot } from 'firebase/firestore'

import { authUser } from './auth'

export const createQueryStore = <T>(createQuery: (userId: string) => Query): Readable<T[]> =>
  derived(
    [authUser],
    ([user], set) => {
      if (!user) return set([])

      return onSnapshot(createQuery(user.id), (snapshot) => {
        set(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      })
    },
    []
  )
