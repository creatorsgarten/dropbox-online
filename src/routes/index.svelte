<script lang="ts">
	import Inbox from '../components/Inbox.svelte'
	import Logout from '../components/Logout.svelte'
	import GoogleLogin from '../components/GoogleLogin.svelte'
	import ContactList from '../components/ContactList.svelte'
	import EditProfile from '../components/EditProfile.svelte'

	import { currentUser } from '../modules/user.store'
</script>

<div class="px-8 py-5 min-h-full font-light">
	<div class="space-y-8">
		{#if !$currentUser}
			<GoogleLogin />
		{/if}

		{#if $currentUser}
			<Inbox />
		{/if}

		<ContactList />

		<EditProfile />
	</div>
</div>

<style></style>
