<script lang="ts">
	import { users } from '../modules/user.store'
</script>

<div>
	<div class="space-y-3">
		<h1 class="text-2xl">ส่งให้</h1>

		<section
			class="flex flex-col items-start space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row flex-wrap"
		>
			{#each $users as user}
				<div
					class="flex items-center bg-green-300 hover:bg-green-400 shadow-lg shadow-green-100 text-gray-800 px-4 py-3 rounded-lg w-full max-w-[240px] cursor-pointer"
				>
					<div class="text-lg">
						<span>{user.name}</span>

						{#if user.instagram}
							<span class="text-sm">@{user.instagram}</span>
						{/if}
					</div>
				</div>
			{/each}
		</section>
	</div>
</div>

<style></style>
