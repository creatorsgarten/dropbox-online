<script lang="ts">
	import { logout } from '../modules/auth'
	import { currentUser } from '../modules/user.store'
</script>

{#if $currentUser}
	<button
		on:click={logout}
		class="bg-gray-500 hover:bg-gray-700 text-white px-3 py-2 rounded-lg shadow-lg shadow-gray-300 text-xs font-light"
	>
		ออกจากระบบ
	</button>
{/if}
