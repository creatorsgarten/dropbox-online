<script lang="ts">
	import { loginWithGoogle } from '../modules/auth'

	import { notes } from '../modules/notes.store'
	import { currentUser, users } from '../modules/user.store'

	$: title = $currentUser ? `${$currentUser.name}'s` : 'My'

	const nameOf = (id: string) => $users?.find((u) => u.id === id)?.name
</script>

<main class="px-8 py-5 min-h-full">
	<section class="space-y-4">
		<button on:click={loginWithGoogle}>Login with Google</button>

		<h1 class="text-2xl font-bold">
			{title} Dropbox
		</h1>

		<div class="flex flex-wrap items-center justify-center sm:justify-start space-x-5">
			{#each $notes as note}
				<div class="font-bold w-full max-w-[240px] relative">
					<div class="absolute right-0 arrow-topright" />

					<div class="bg-pink-50 px-4 py-4 min-h-[180px] rounded-t-xl">
						{note.message}
					</div>

					<div class="bg-pink-100 px-4 py-2 rounded-b-xl text-center">
						{nameOf(note.from)}
					</div>
				</div>
			{:else}
				<div>Your dropbox is empty.</div>
			{/each}
		</div>
	</section>
</main>

<style></style>
