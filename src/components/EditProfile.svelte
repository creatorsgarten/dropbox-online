<script lang="ts">
	import Logout from './Logout.svelte'

	import { currentUser, setUser } from '../modules/user.store'

	let userId = ''

	let name = ''
	let instagram = ''
	let photo = ''

	let files: FileList

	const save = () => setUser({ name, instagram })

	$: if (files?.length > 0) {
		photo = files[0].name
	}

	$: if ($currentUser && userId !== $currentUser?.id) {
		userId = $currentUser.id
		name = $currentUser.name
		instagram = $currentUser.instagram
		photo = $currentUser.photo
	}
</script>

<div class="space-y-3">
	<h1 class="text-2xl">แก้ไขโปรไฟล์</h1>

	<div class="space-y-1">
		<div class="text-xs">ชื่อเล่น</div>

		<input
			class="font-light"
			type="text"
			placeholder="เช่น พี่ภูมิ"
			bind:value={name}
			on:blur={save}
			on:keypress={(e) => e.key === 'Enter' && save()}
		/>
	</div>

	<div class="space-y-1">
		<div class="text-xs">อินสตาแกรม</div>

		<input
			class="font-light"
			type="text"
			placeholder="เช่น phoomparin"
			bind:value={instagram}
			on:blur={save}
			on:keypress={(e) => e.key === 'Enter' && save()}
		/>
	</div>

	<div class="space-y-2">
		<div class="text-xs">รูปโปรไฟล์</div>

		<input
			type="file"
			bind:files
			class="h-8 font-light text-xs text-gray-600 overflow-visible file:cursor-pointer file:bg-green-200 file:text-xs file:border-none file:font-light file:px-3 file:py-1 file:mr-2 file:rounded-lg file:shadow-md file:shadow-green-100"
		/>
	</div>

	<Logout />
</div>

<style></style>
