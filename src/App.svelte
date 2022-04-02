<script>
	import { navData } from './lib/data';
  import {router, active} from 'tinro';
	import Router from "./Router.svelte";
  import Drawer from "./lib/flowbite/Drawer.svelte";
  import Toasts from "./lib/toast/Toasts.svelte";
  import { default as Modal } from "./lib/flowbite/Modal.svelte";
  import { default as Popup } from "./lib/flowbite/Modal.svelte";
  import ModContA from "./lib/flowbite/ModContA.svelte";
  import PopContA from "./lib/flowbite/PopContA.svelte";
  import SignIn from "./routes/SignIn.svelte";
  import {
    IconGlobe,
    IconHome,
    IconHsp,
    IconMenu,
    IconServer,
    IconSettings,
    IconX,
  } from "./assets/icons";
  import NavBar from "./lib/flowbite/NavBar.svelte";
  import { supabase } from "./lib/db";
  import { route } from "./router_stores";
  import { user, _session, isOpen } from "./lib/stores";
  import Spinner from "./lib/flowbite/Spinner.svelte";
  export let open;
  let modalOpen;
  let popOpen;
  let iconSize = "46px";
  let loading;
  $user = supabase.auth.user();

  supabase.auth.onAuthStateChange((event, session) => {
    $_session = session;
    console.log("onAuthStateChange", event, session)
  });
  $: console.log("_session", $_session);
  const Icons = [IconHome, IconGlobe, IconSettings, IconServer];
</script>

<Toasts />
<Modal type="modal" component={ModContA} bind:open={modalOpen} />
<Popup type="popup" component={PopContA} bind:open={popOpen} />
<Drawer {navData} bind:open />
<div id="app">
  {#if $user}
    <NavBar bind:open>
        {#each navData as {name, path, icon, exact}, i}
          <a href={path} class="link" use:active data-exact={exact} data-active-class="text-blue-500">
            <svelte:component this={Icons[i]} style="--icon-font-size: {iconSize}" />
          </a>
        {/each}
        <button class="link" on:click={() => (modalOpen = true)}
          ><IconHsp style="--icon-font-size: {iconSize}" /></button
        >
        <button class="link" on:click={() => (popOpen = true)}
          ><IconGlobe style="--icon-font-size: {iconSize}" /></button
        >
    </NavBar>
    <main>
      <Router class="{!$_session ? 'animate-animated animate-fadeOut animate-slow' : ''}" bind:loading />
    </main>
  {:else}
    <NavBar />
    <main>
      <SignIn bind:loading />  
    </main>
  {/if}
</div>

{#if loading}
   <Spinner></Spinner>
{/if}


<style>
  .link {
    @apply inline-flex justify-center items-center px-2 py-1 min-h-14 min-w-12 hover:text-gray-400;
  }
  main {
    @apply relative flex-grow h-full w-full overflow-hidden;
  }
</style>
