<script lang="ts">
  import Inbox from '../components/Inbox.svelte'
  import Outbox from '../components/Outbox.svelte'
  import Composer from '../components/ComposerDialog.svelte'
  import GoogleLogin from '../components/GoogleLogin.svelte'
  import ContactList from '../components/ContactList.svelte'
  import EditProfile from '../components/EditProfile.svelte'

  import { currentUser } from '../modules/user.store'
</script>

<div class="min-h-full px-8 py-5 font-light">
  {#if $currentUser}
    <div class="space-y-8">
      <Inbox />
      <Outbox />
      <ContactList />
      <EditProfile />
      <Composer />
    </div>
  {:else}
    <GoogleLogin />
  {/if}
</div>

<style></style>
