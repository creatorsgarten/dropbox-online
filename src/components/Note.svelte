<script lang="ts">
  import c from 'classnames'

  import { nameOf, users } from '../modules/user.store'

  import type { Note } from '../types/Note'

  export let note: Note
</script>

<div class="relative w-full max-w-[240px] rounded-xl shadow-lg shadow-green-100">
  <div class="min-h-[180px] rounded-t-xl bg-green-50 px-4 py-4">
    {note.message}
  </div>

  <div class="rounded-b-xl bg-green-100 px-4 py-2 text-center">
    {nameOf(note.from, $users)}
  </div>
</div>
