<script lang="ts">
  import { logout } from '../modules/auth'
  import { currentUser } from '../modules/user.store'
</script>

{#if $currentUser}
  <button
    on:click={logout}
    class="rounded-lg bg-gray-500 px-3 py-2 text-xs font-light text-white shadow-lg shadow-gray-100 hover:bg-gray-700"
  >
    ออกจากระบบ
  </button>
{/if}
