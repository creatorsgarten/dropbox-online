<script lang="ts">
	import Inbox from '../components/Inbox.svelte'
	import GoogleLogin from '../components/GoogleLogin.svelte'

	import { currentUser } from '../modules/user.store'
</script>

<div class="px-8 py-5 min-h-full font-light">
	<section class="space-y-4">
		{#if !$currentUser}
			<GoogleLogin />
		{/if}

		{#if $currentUser}
			<Inbox />
		{/if}
	</section>
</div>

<style></style>
