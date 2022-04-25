import { derived, type Readable } from 'svelte/store'

import { composer } from './composer.store'
import { isStorage, toURL } from './design.composer'

const bg = derived(composer, (c) => c.background)
const img = (src: string) => `url("${src}")`

const isImage = (src: string | null) => src?.startsWith('http')

export const color: Readable<string> = derived([bg], ([value]) =>
  isImage(value) || isStorage(value) ? null : value
)

export const background: Readable<string> = derived([bg], ([src], set) => {
  if (isImage(src)) return set(img(src))
  if (!isStorage(src)) return set(null)

  load()

  async function load() {
    const path = await toURL(src)

    set(img(path))
  }
})
