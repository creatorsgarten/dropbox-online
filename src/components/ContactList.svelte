<script lang="ts">
  import c from 'classnames'

  import { authUser } from '../modules/auth'
  import { users } from '../modules/user.store'
  import { openComposer } from '../modules/composer.store'
</script>

<div>
  <div class="space-y-3">
    <h1 class="text-2xl">ส่งให้</h1>

    <section class="grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {#each $users as user}
        <div
          on:click={() => openComposer(user.id)}
          class={c(
            'flex w-full max-w-[240px] cursor-pointer items-center rounded-lg bg-green-300 px-4 py-3 text-gray-800 shadow-lg shadow-green-100 hover:bg-green-400',
            user.id === $authUser.id && 'bg-gray-300 shadow-gray-100 hover:bg-gray-400'
          )}
        >
          <div class="text-lg">
            <span>{user.name ?? 'บุคคลนิรนาม'}</span>

            {#if user.instagram}
              <span class="text-sm">@{user.instagram}</span>
            {/if}

            {#if user.id === $authUser.id}
              <span class="text-sm">(ฉัน)</span>
            {/if}
          </div>
        </div>
      {/each}
    </section>
  </div>
</div>

<style></style>
