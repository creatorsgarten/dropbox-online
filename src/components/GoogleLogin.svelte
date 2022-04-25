<script lang="ts">
  import { loginWithGoogle } from '../modules/auth'
</script>

<div class="flex items-center justify-center h-screen flex-col space-y-8">
  <div class="font-bold text-3xl">Dropbox Online</div>
  <button
    on:click={loginWithGoogle}
    class="bg-primary text-white px-4 py-2 rounded-lg shadow-lg shadow-primary-light text-lg font-light hover:shadow-primary hover:shadow-md hover:bg-primary-dark transition-all ease-in-out duration-300"
    >Login with Google</button
  >
</div>
