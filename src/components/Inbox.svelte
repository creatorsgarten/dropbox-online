<script lang="ts">
  import Note from './Note.svelte'

  import { notes } from '../modules/notes.store'
  import { currentUser } from '../modules/user.store'
</script>

<main class="space-y-4">
  <h1 class="text-2xl">
    กล่องจดหมายของ{$currentUser?.name ?? 'ฉัน'}
  </h1>

  <div class="grid items-center gap-4 space-y-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
    {#each $notes as note}
      <Note {note} />
    {:else}
      <div>กล่องจดหมายยังว่างเปล่า...</div>
    {/each}
  </div>
</main>
