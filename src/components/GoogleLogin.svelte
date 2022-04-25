<script lang="ts">
  import { loginWithGoogle } from '../modules/auth'
</script>

<div class="flex h-screen flex-col items-center justify-center space-y-8">
  <div class="text-3xl font-bold">Dropbox Online</div>
  <button
    on:click={loginWithGoogle}
    class="rounded-lg bg-primary px-4 py-2 text-lg font-light text-white shadow-lg shadow-primary-light transition-all duration-300 ease-in-out hover:bg-primary-dark hover:shadow-md hover:shadow-primary"
    >Login with Google</button
  >
</div>
