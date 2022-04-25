<script lang="ts">
  import { nameOf, users } from '../modules/user.store'

  export let message: string
  export let sender: string
</script>

<div
  class="relative w-full max-w-[240px] rounded-xl shadow-lg shadow-green-100 cursor-pointer"
  on:click
>
  <div class="min-h-[180px] rounded-t-xl bg-green-50 px-4 py-4">
    {message}
  </div>

  <div class="rounded-b-xl bg-green-100 px-4 py-2 text-center">
    {nameOf(sender, $users)}
  </div>
</div>
