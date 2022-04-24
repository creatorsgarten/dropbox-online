<script lang="ts">
	import c from 'classnames'

	import { nameOf, users } from '../modules/user.store'

	import type { Note } from '../types/Note'

	export let note: Note
</script>

<div class="w-full max-w-[240px] relative shadow-lg rounded-xl shadow-green-100">
	<div class="bg-green-50 px-4 py-4 min-h-[180px] rounded-t-xl">
		{note.message}
	</div>

	<div class="bg-green-100 px-4 py-2 rounded-b-xl text-center">
		{nameOf(note.from, $users)}
	</div>
</div>
