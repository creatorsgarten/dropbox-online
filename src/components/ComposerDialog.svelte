<script lang="ts">
	import { fade, fly } from 'svelte/transition'
	import { sineInOut } from 'svelte/easing'

	import { nameOf, users } from '../modules/user.store'
	import { closeComposer, composer, sendMessage } from '../modules/composer.store'
</script>

{#if $composer.open}
	<div class="fixed z-10 inset-0 overflow-y-auto" role="dialog" aria-modal>
		<div class="flex w-full items-center justify-center min-h-screen">
			<div
				class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity cursor-pointer"
				aria-hidden
				on:click={closeComposer}
				transition:fade={{ easing: sineInOut, duration: 200 }}
			/>

			<div
				class="w-full max-w-[1000px] mx-4 sm:mx-8 md:mx-12 relative shadow-lg rounded-md shadow-neutral-700"
				transition:fly={{ easing: sineInOut, duration: 200, y: 50 }}
			>
				<div class="w-full bg-neutral-900 rounded-t-md relative px-2 py-2">
					<h1 class="text-center text-sm text-gray-300 font-medium">
						เขียนข้อความถึง{nameOf($composer.receiver, $users)}
					</h1>

					<button
						class="flex absolute items-center justify-center text-white top-[-7px] right-[-7px] w-6 h-6 bg-red-500 rounded-full shadow-md cursor-pointer"
						on:click={closeComposer}
					>
						<i class="fa-solid fa-xmark" />
					</button>
				</div>

				<div class="w-full bg-zinc-900 relative px-2 py-2 border-y-[1px] border-zinc-800">
					<textarea
						class="text-white bg-transparent px-2 py-2 w-full outline-none text-xl h-full min-h-[300px] font-light placeholder:text-gray-200"
						placeholder="เขียนอะไรดีนะ..."
						bind:value={$composer.message}
					/>
				</div>

				<div class="flex justify-between bg-neutral-900 px-4 py-2 rounded-b-md text-white">
					<div />

					<button class="bg-pink-400 hover:bg-pink-500 px-3 py-1 rounded-sm" on:click={sendMessage}>
						<i class="fa-solid fa-paper-plane mr-1" /> <span>ส่งข้อความ</span>
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style></style>
