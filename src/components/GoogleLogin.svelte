<script lang="ts">
	import { loginWithGoogle } from '../modules/auth'
</script>

<button
	on:click={loginWithGoogle}
	class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg shadow-blue-200 text-lg font-light"
	>Login with Google</button
>
