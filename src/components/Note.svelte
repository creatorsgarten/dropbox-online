<script lang="ts">
  import { onMount } from 'svelte'

  import { authUser } from '../modules/auth'
  import { deleteNote } from '../modules/delete.notes'
  import { nameOf, users } from '../modules/user.store'
  import { toBackgroundAsync, toColor } from '../modules/background.composer'

  import type { Note } from '../types/Note'

  export let note: Note
  export let outbox = false

  const { background, from, to, message } = note

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
  {#if $authUser.id === from}
    <button
      class="absolute top-[-7px] right-[-7px] flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-neutral-300 text-neutral-400 hover:bg-neutral-600 shadow-md"
      on:click={() => deleteNote(note.id)}
    >
      <i class="fa-solid fa-trash fa-xs" />
    </button>
  {/if}

  <div
    class="h-full min-h-[180px] rounded-t-xl bg-green-50 px-4 py-4"
    style:background-image={bg}
    style:background-size="cover"
    style:background-color={color}
  >
    <p class="whitespace-pre-wrap">
      {message}
    </p>
  </div>

  <div
    class="rounded-b-xl bg-green-100 px-4 py-2 text-center"
    style:background-image={bg}
    style:background-color={color}
  >
    {nameOf(outbox ? to : from, $users)}
  </div>
</div>
