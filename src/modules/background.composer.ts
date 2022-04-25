import { derived, type Readable } from 'svelte/store'

import { composer } from './composer.store'
import { isStorage, toURL } from './design.composer'

const bg = derived(composer, (c) => c.background)
const img = (src: string) => `url("${src}")`

const isImage = (src: string | null) => src?.startsWith('http')

export const toColor = (value: string) => (isImage(value) || isStorage(value) ? null : value)

export const color = derived(bg, toColor)

export const toBackgroundAsync = async (value: string) => {
  if (isImage(value)) return img(value)
  if (!isStorage(value)) return null

  const path = await toURL(value)

  return img(path)
}

export const background: Readable<string> = derived([bg], ([value], set) => {
  const load = async () => set(await toBackgroundAsync(value))

  load()
})
