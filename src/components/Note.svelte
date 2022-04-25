<script lang="ts">
  import { nameOf, users } from '../modules/user.store'
  import { toBackgroundAsync, toColor } from '../modules/background.composer'
  import { onMount } from 'svelte'

  export let message: string
  export let sender: string
  export let background: string | undefined

  let bg = ''
  let color = ''

  onMount(async () => {
    bg = await toBackgroundAsync(background)
    color = await toColor(background)
  })
</script>

<div
  class="relative w-full max-w-[240px] rounded-xl shadow-lg shadow-green-100 cursor-pointer"
  on:click
  style:color={background ? 'white' : null}
  class:shadow-gray-200={background}
>
  <div
    class="min-h-[180px] rounded-t-xl bg-green-50 px-4 py-4"
    style:background-image={bg}
    style:background-size="cover"
    style:background-color={color}
  >
    {message}
  </div>

  <div
    class="rounded-b-xl bg-green-100 px-4 py-2 text-center"
    style:background-image={bg}
    style:background-color={color}
  >
    {nameOf(sender, $users)}
  </div>
</div>
