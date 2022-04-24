<script lang="ts">
	const nickname = 'Poom'

	const notes = [
		{ from: 'Poom', message: 'สวัสดีครับ' },
		{ from: 'Chun', message: 'ว่ายังไงบ้าง' }
	]
</script>

<main class="px-8 py-5 min-h-full">
	<section class="space-y-4">
		<h1 class="text-2xl font-bold">{nickname}'s Dropbox</h1>

		<div class="flex flex-wrap items-center justify-center sm:justify-start space-x-5">
			{#each notes as note}
				<div class="font-bold w-full max-w-[240px] relative">
					<div class="absolute right-0 arrow-topright" />
					<div class="bg-pink-50 px-4 py-4 min-h-[180px] rounded-t-xl">
						{note.message}
					</div>
					<div class="bg-pink-100 px-4 py-2 rounded-b-xl text-center">
						{note.from}
					</div>
				</div>
			{:else}
				<div>Your dropbox is empty.</div>
			{/each}
		</div>
	</section>
</main>

<style></style>
