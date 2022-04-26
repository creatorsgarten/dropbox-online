<script lang="ts">
  import { onMount } from 'svelte'

  import { authUser } from '../modules/auth'
  import { deleteNote } from '../modules/delete.notes'
  import { nameOf, users } from '../modules/user.store'
  import { toBackgroundAsync, toColor } from '../modules/background.composer'
  import Modal from './Modal.svelte'

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
  class="relative w-full max-w-[240px] cursor-pointer rounded-xl shadow-lg shadow-green-100"
  on:click
  style:color={background ? 'white' : null}
  class:shadow-gray-200={background}
>
  {#if $authUser.id === from}
    <Modal>
      <div
        slot="trigger"
        class="absolute top-[-7px] right-[-7px] flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-neutral-300 text-neutral-400 shadow-md hover:bg-neutral-600"
        let:open
      >
        <button on:click={open}><i class="fa-solid fa-trash fa-xs" /></button>
      </div>
      <div slot="header">
        <h1 class="text-center text-lg font-bold">คุณต้องการลบ Dropbox Message นี้ใช่หรือไม่</h1>
      </div>
      <div slot="content" class="mt-5 text-center">
        <p>เมื่อลบแล้วจะไม่สามารถกู้คืนได้</p>
      </div>

      <div slot="footer" let:store={{ close }}>
        <div class="mt-8 flex justify-end space-x-3">
          <button
            class="px-3 py-2 bg-red-600 text-white rounded-md hover:-translate-y-[0.10rem] shadow-red-300 shadow-md transition-all ease-in-out
				 duration-200"
            on:click={() => deleteNote(note.id)}>ใช่ ฉันต้องการลบ</button
          >
          <button
            class="px-3 py-2 bg-white text-black rounded-md hover:-translate-y-[0.10rem] shadow-md transition-all ease-in-out
				 duration-200"
            on:click={close}>ยกเลิก</button
          >
        </div>
      </div>
    </Modal>
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
