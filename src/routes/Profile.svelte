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
      class="flex min-h-[30rem] w-full flex-col items-center bg-gray-50 px-3 pt-2 sm:justify-center sm:pt-28"
    >
      <div class="mx-auto w-full p-5 sm:max-w-md">
        <h2 class="mb-12 text-center text-3xl font-extrabold text-gray-600">แก้ไขโปรไฟล์</h2>
        <div>
          <div class="flex items-center justify-center">
            <!-- <img
							class="rounded-full h-32 w-32"
							src={photo
								? `https://api.instagram.com/oembed/?url=https://www.instagram.com/p/${photo}`
								: src}
							alt="profile"
						/> -->
            <div class="h-32 w-32 rounded-full bg-gradient-to-r from-primary to-primary-dark" />
          </div>
        </div>
        <div class="mb-4">
          <label class="mb-1 block" for="nick">ชื่อเล่น</label>
          <input
            id="nick"
            type="text"
            name="nick"
            placeholder="เช่น พี่ภูมิ"
            class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary-light focus:outline-none focus:ring focus:ring-primary-light focus:ring-opacity-50 disabled:bg-gray-100"
            bind:value={name}
            on:blur={save}
          />
        </div>
        <div class="mb-4">
          <label class="mb-1 block" for="password">อินสตาแกรม</label>
          <input
            id="instagram"
            type="text"
            name="instagram"
            placeholder="เช่น phoomparin"
            class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary-light focus:outline-none focus:ring focus:ring-primary-light focus:ring-opacity-50 disabled:bg-gray-100"
            bind:value={instagram}
            on:blur={save}
          />
        </div>
        <div class="mb-4">
          <div class="shrink-0">
            <label class="mb-1 block" for="photo">รูปโปรไฟล์</label>
            <input id="photo" type="file" name="photo" class="hidden" bind:files />
            <label
              class="mt-1 block w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 font-normal shadow-sm transition focus:border-primary-light focus:outline-none focus:ring focus:ring-primary-light focus:ring-opacity-50 active:bg-gray-100 disabled:bg-gray-100"
              for="photo"
              tabindex="0"
            >
              {#if photo}
                <span>{photo}</span>
              {:else}
                <span>
                  <i class="fa-solid fa-upload mr-1" />
                  คลิกเพื่ออัพโหลดไฟล์
                </span>
              {/if}
            </label>
          </div>
        </div>
        <div class="mt-6">
          <button
            class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 font-semibold capitalize text-white transition hover:bg-green-400 focus:border-x-green-500 focus:outline-none focus:ring focus:ring-primary-light active:bg-green-500 disabled:opacity-25"
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
