<script lang="ts">
	import Inbox from '../components/Inbox.svelte'
	import GoogleLogin from '../components/GoogleLogin.svelte'
	import ContactList from '../components/ContactList.svelte'
	import EditProfile from '../components/EditProfile.svelte'

	import { currentUser } from '../modules/user.store'
</script>

<div class="px-8 py-5 min-h-full font-light">
	{#if $currentUser}
		<div class="space-y-8">
			<Inbox />
			<ContactList />
			<EditProfile />
		</div>
	{:else}
		<GoogleLogin />
	{/if}
</div>

<style></style>
