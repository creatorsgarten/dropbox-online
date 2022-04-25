<script lang="ts">
	import Logout from './Logout.svelte'

	import { currentUser } from '../modules/user.store'

	let name = ''
	let instagram = ''
	let photo = ''

	let files: FileList

	$: if (files?.length > 0) {
		photo = files[0].name
	}

	$: if ($currentUser) {
		name = $currentUser.name
		instagram = $currentUser.instagram
		photo = $currentUser.photo
	}
</script>

<div class="space-y-3">
	<h1 class="text-2xl">แก้ไขโปรไฟล์</h1>

	<div class="space-y-1">
		<div class="text-xs">ชื่อเล่น</div>
		<input type="text" placeholder="เช่น พี่ภูมิ" bind:value={name} />
	</div>

	<div class="space-y-1">
		<div class="text-xs">อินสตาแกรม</div>
		<input type="text" placeholder="เช่น phoomparin" bind:value={instagram} />
	</div>

	<div class="space-y-1">
		<div class="text-xs">รูปโปรไฟล์</div>

		<input
			type="file"
			bind:files
			class="h-8 overflow-visible file:cursor-pointer file:bg-green-400 file:text-xs file:border-none file:font-light file:px-3 file:py-1 file:mr-2 file:rounded-lg file:shadow-md file:shadow-green-200"
		/>

		<div>{photo}</div>
	</div>

	<Logout />
</div>

<style></style>
