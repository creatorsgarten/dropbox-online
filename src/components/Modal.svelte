<script context="module">
  const modalList = []
</script>

<script>
  import { booleanStore } from '../modules/booleanStore'

  const store = booleanStore(false)
  const { isOpen, open, close } = store
  function keydown(e) {
    e.stopPropagation()
    if (e.key === 'Escape') {
      close()
    }
  }
  function transitionend(e) {
    const node = e.target
    node.focus()
  }
  function modalAction(node) {
    const returnFn = []
    // for accessibility
    if (document.body.style.overflow !== 'hidden') {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      returnFn.push(() => {
        document.body.style.overflow = original
      })
    }
    node.addEventListener('keydown', keydown)
    node.addEventListener('transitionend', transitionend)
    node.focus()
    modalList.push(node)
    returnFn.push(() => {
      node.removeEventListener('keydown', keydown)
      node.removeEventListener('transitionend', transitionend)
      modalList.pop()
      // Optional chaining to guard against empty array.
      modalList[modalList.length - 1]?.focus()
    })
    return {
      destroy: () => returnFn.forEach((fn) => fn())
    }
  }
</script>

<slot name="trigger" {open}>
  <!-- fallback trigger to open the modal -->
  <button on:click={open}>Open</button>
</slot>
{#if $isOpen}
  <div class="modal fixed z-50 top-0 left-0 w-full h-screen text-black flex justify-center items-center opacity-100" use:modalAction tabindex="0">
    <div class="absolute w-full h-full bg-black opacity-70" on:click={close} />

    <div class="z-10 max-w-[70vw] rounded-md bg-white p-4">
      <slot name="header" {store}>
        <!-- fallback -->
        <div>
          <h1 class="opacity-50">Your Modal Heading Goes Here...</h1>
        </div>
      </slot>

      <div class="max-h-[50vh]">
        <slot name="content" {store} />
      </div>

      <slot name="footer" {store}>
        <!-- fallback -->
        <div>
          <h1>Your Modal Footer Goes Here...</h1>
          <button on:click={close}>Close</button>
        </div>
      </slot>
    </div>
  </div>
{/if}

<style>
  div.modal:not(:focus-within) {
    transition: opacity 0.1ms;
    opacity: 0.99;
  }
</style>
