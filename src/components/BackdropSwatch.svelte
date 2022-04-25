<script lang="ts">
  import Swatch from './Swatch.svelte'

  import { setNoteBackdrop, setNoteBackground } from '../modules/composer.store'

  const blue = '#4834d4'
</script>

<div class="items-center justify-center space-x-2 hidden sm:flex">
  <Swatch on:click={() => setNoteBackground(null)} background={null} />
  <Swatch on:click={() => setNoteBackground(blue)} background={blue} />
  <Swatch on:click={() => setNoteBackdrop('gold.jpg')} background="#f9ca24" />
  <Swatch on:click={() => setNoteBackdrop('2.jpg')} background="#c7ecee" />
</div>

<style></style>
