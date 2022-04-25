<script lang="ts">
	import { logout } from '../modules/auth'
	import { page } from '$app/stores'
	let path

	function getPath(currentPath) {
		path = currentPath
		console.log(path)
	}

	$: getPath($page.url.pathname)
</script>

<div class="bg-white px-8 py-5 shadow-md flex items-center justify-between">
	<div class="text-primary text-2xl font-bold">
		<a href="/">Dropbox</a>
	</div>
	<ul class="flex space-x-10">
		<li class="btn">
			<a class="btn" class:active={path === '/Profile'} href="/Profile">Profile</a>
		</li>
		<li class="btn-logout" on:click={logout}>Logout</li>
	</ul>
</div>
