<script lang="ts">
  import Inbox from '../components/Inbox.svelte'
  import Outbox from '../components/Outbox.svelte'
  import Composer from '../components/ComposerDialog.svelte'
  import GoogleLogin from '../components/GoogleLogin.svelte'
  import ContactList from '../components/ContactList.svelte'
  import EditProfile from '../components/EditProfile.svelte'
  import Navbar from '../components/Navbar.svelte'

  import { currentUser, isUserNameEmpty } from '../modules/user.store'
  import { goto } from '$app/navigation'

  currentUser.subscribe((currentUserInfo) => {
    if (isUserNameEmpty(currentUserInfo)) {
      goto('/Profile')
    }
  })
</script>

<div class="min-h-full font-light">
  {#if $currentUser}
    <Navbar />
    <div class="bg-gray-50 px-8 py-5">
      <div class="space-y-8">
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
