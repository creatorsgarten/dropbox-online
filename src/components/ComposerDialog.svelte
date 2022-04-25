<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  import { sineInOut } from 'svelte/easing'

  import BackdropSwatch from './BackdropSwatch.svelte'

  import { nameOf, users } from '../modules/user.store'
  import { background, color } from '../modules/background.composer'
  import { closeComposer, composer, sendMessage } from '../modules/composer.store'
</script>

{#if $composer.open}
  <div class="fixed inset-0 z-10 overflow-y-auto" role="dialog" aria-modal>
    <div class="flex min-h-screen w-full items-center justify-center">
      <div
        class="fixed inset-0 cursor-pointer bg-gray-900 bg-opacity-75 transition-opacity"
        aria-hidden
        on:click={closeComposer}
        transition:fade={{ easing: sineInOut, duration: 200 }}
      />

      <div
        class="bg-zinc-900 relative mx-4 w-full max-w-[1000px] rounded-md shadow-lg shadow-neutral-700 sm:mx-8 md:mx-12 bg-cover"
        transition:fly={{ easing: sineInOut, duration: 200, y: 50 }}
        style:background-image={$background ?? null}
        style:background-color={$color ?? null}
        style:background-size="cover"
        style:background-position="center center"
      >
        <div
          class="relative w-full rounded-t-md bg-neutral-900 px-2 py-2 opacity-90 backdrop-blur-3xl"
        >
          <h1 class="text-center text-sm font-medium text-gray-300">
            เขียนข้อความถึง{nameOf($composer.receiver, $users)}
          </h1>

          <button
            class="absolute top-[-7px] right-[-7px] flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-neutral-600 text-neutral-300 shadow-md"
            on:click={closeComposer}
          >
            <i class="fa-solid fa-xmark" />
          </button>
        </div>

        <div class="relative w-full border-y-[1px] border-zinc-800 px-2 py-2">
          <textarea
            class="h-full min-h-[300px] w-full bg-transparent px-2 py-2 text-xl font-light text-white outline-none placeholder:text-gray-200"
            placeholder="เขียนอะไรดีนะ..."
            bind:value={$composer.message}
          />
        </div>

        <div
          class="flex justify-between rounded-b-md bg-neutral-900 px-4 py-2 text-white opacity-90 backdrop-blur-3xl"
        >
          <BackdropSwatch />

          <button class="rounded-sm bg-pink-400 px-3 py-1 hover:bg-pink-500" on:click={sendMessage}>
            <i class="fa-solid fa-paper-plane mr-1" /> <span>ส่งข้อความ</span>
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style></style>
