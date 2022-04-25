<script lang="ts">
  import Note from './Note.svelte'

  import { outbox } from '../modules/notes.store'
</script>

<main class="space-y-4">
  <h1 class="text-2xl">ข้อความที่ฉันเขียนให้เพื่อน</h1>

  <div class="grid items-center gap-4 gap-y-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
    {#each $outbox as note}
      <Note message={note.message} sender={note.to} background={note.background} />
    {:else}
      <div>ฉันยังไม่ได้เขียนข้อความให้ใคร...</div>
    {/each}
  </div>
</main>
