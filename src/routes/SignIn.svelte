<script>
	import Page from '../lib/flowbite/Page.svelte';
	import { user } from './../lib/stores';
  import {logIn} from '../lib/db';
  let email = '';
  let password = '';
  export let loading = false;

  const handleSubmit = async () => {
    loading = true;
    try {
      let user = await logIn(email, password);
      return user;
    } catch (error) {
      console.error(error)
    } finally {
      loading = false;
    }
  };

</script>
<Page>
  <article {...$$restProps}>
  <div class="w-full max-w-xs mx-auto px-4 py-4 border border-dashed border-gray-100 rounded-lg">
    <form on:submit|preventDefault={handleSubmit}>
      <!-- Email input -->
      <div class="mb-3">
        <input type="email" bind:value={email} class="form-control" placeholder="Email">
      </div>
      <!-- Password input -->
      <div class="mb-3">
        <input type="password" bind:value={password} class="form-control" placeholder="Password">
      </div>
      <!-- Submit button -->
      <button type="submit" class="w-full text-center btn btn-blue" data-mdb-ripple="true" data-mdb-ripple-color="light">
        Sign in
      </button>
    </form>
  </div>
  </article>
</Page>

<!-- <div class="w-full h-screen flex items-center justify-center bg-indigo-100">
  <form class="w-full md:w-1/3 rounded-lg" on:submit|preventDefault={handleSubmit}>
    <div class="flex font-bold justify-center mt-6">
      <img class="h-20 w-20 mb-3" src="https://dummyimage.com/64x64" />
    </div>
    <h2 class="text-2xl text-center text-gray-200 mb-8">Login</h2>
    <div class="px-12 pb-10">
      <div class="w-full mb-2">
        <div class="flex items-center">
          <input
            type="email"
            bind:value={email}
            placeholder="Email"
            class="
              w-full
              border
              rounded
              px-3
              py-2
              text-gray-700
              focus:outline-none
            "
          />
        </div>
      </div>
      <div class="w-full mb-2">
        <div class="flex items-center">
          <input
            type="password"
            bind:value={password}
            placeholder="Password"
            class="
              w-full
              border
              rounded
              px-3
              py-2
              text-gray-700
              focus:outline-none
            "
          />
        </div>
      </div>
      <button
        type="submit"
        class="
          w-full
          py-2
          mt-8
          rounded-full
          bg-blue-400
          text-gray-100
          focus:outline-none
        "
      >
        {loading ? '... loading' : 'Login'}
      </button>
    </div>
  </form>
  {#if $user}
     <button
     type="button"
     on:click={logOut}
     class="
       w-full
       py-2
       mt-8
       rounded-full
       bg-blue-400
       text-gray-100
       focus:outline-none
     "
   >
     Logout
   </button>
  {/if}
</div> -->

<style>
  article {
    @apply h-full w-full flex flex-col justify-center;
  }
  .form-control {
    @apply block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;
  }
</style>