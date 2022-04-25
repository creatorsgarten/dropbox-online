<script lang="ts">
  import GoogleLogin from '../components/GoogleLogin.svelte'
  import Navbar from '../components/Navbar.svelte'

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
  console.log($currentUser)
  let src =
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80'
</script>

<div class="min-h-full font-light">
  {#if $currentUser}
    <Navbar />
    <div
      class="w-full min-h-[30rem] bg-gray-50 flex flex-col sm:justify-center items-center px-3 sm:pt-28 pt-2"
    >
      <div class="w-full sm:max-w-md p-5 mx-auto">
        <h2 class="mb-12 text-center text-3xl font-extrabold text-gray-600">แก้ไขโปรไฟล์</h2>
        <div>
          <div class="flex justify-center items-center">
            <!-- <img
							class="rounded-full h-32 w-32"
							src={photo
								? `https://api.instagram.com/oembed/?url=https://www.instagram.com/p/${photo}`
								: src}
							alt="profile"
						/> -->
            <div class="bg-gradient-to-r from-primary to-primary-dark rounded-full h-32 w-32" />
          </div>
        </div>
        <div class="mb-4">
          <label class="block mb-1" for="nick">ชื่อเล่น</label>
          <input
            id="nick"
            type="text"
            name="nick"
            placeholder="เช่น พี่ภูมิ"
            class="py-2 px-3 border border-gray-300 focus:border-primary-light focus:outline-none focus:ring focus:ring-primary-light focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            bind:value={name}
            on:blur={save}
          />
        </div>
        <div class="mb-4">
          <label class="block mb-1" for="password">อินสตาแกรม</label>
          <input
            id="instagram"
            type="text"
            name="instagram"
            placeholder="เช่น phoomparin"
            class="py-2 px-3 border border-gray-300 focus:border-primary-light focus:outline-none focus:ring focus:ring-primary-light focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            bind:value={instagram}
            on:blur={save}
          />
        </div>
        <div class="mb-4">
          <div class="shrink-0">
            <label class="block mb-1" for="password">รูปโปรไฟล์</label>
            <input
              id="photo"
              type="file"
              name="photo"
              class="py-2 px-3 border border-gray-300 focus:border-primary-light focus:outline-none focus:ring focus:ring-primary-light focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              bind:files
            />
          </div>
        </div>
        <div class="mt-6">
          <button
            class="w-full inline-flex items-center justify-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold capitalize text-white hover:bg-green-400 active:bg-green-500 focus:outline-none focus:border-x-green-500 focus:ring focus:ring-primary-light disabled:opacity-25 transition"
            on:click={save}>แก้ไขโปรไฟล์</button
          >
        </div>
      </div>
    </div>
  {:else}
    <GoogleLogin />
  {/if}
</div>

<style></style>
