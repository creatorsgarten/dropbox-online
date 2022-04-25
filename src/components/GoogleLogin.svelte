<script lang="ts">
  import { loginWithGoogle } from '../modules/auth'
</script>

<button
  on:click={loginWithGoogle}
  class="rounded-lg bg-blue-500 px-4 py-2 text-lg font-light text-white shadow-lg shadow-blue-200"
  >Login with Google</button
>
