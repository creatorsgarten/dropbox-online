<script lang="ts">
  import Inbox from '../components/Inbox.svelte'
  import Outbox from '../components/Outbox.svelte'
  import Composer from '../components/ComposerDialog.svelte'
  import GoogleLogin from '../components/GoogleLogin.svelte'
  import ContactList from '../components/ContactList.svelte'
  import EditProfile from '../components/EditProfile.svelte'
	import Navbar from '../components/Navbar.svelte'
	import Alert from '../components/Alert.svelte'


  import { currentUser } from '../modules/user.store'
</script>

<div class="min-h-full font-light">
	{#if $currentUser}
		<Navbar />
		<div class="px-8 py-5 bg-gray-50">
			<div class="space-y-8">
				<Alert />
				<Inbox />
				<Outbox />
				<ContactList />
				<Composer />
			</div>
		</div>
	{:else}
		<GoogleLogin />
	{/if}
</div>

<style></style>
