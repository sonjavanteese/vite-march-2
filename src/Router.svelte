<script>
	import { logOut } from './lib/db';
	import { user } from './lib/stores';
  import {sleep} from './lib/data/_list';
  import JeListPage from "./routes/JeListPage.svelte";
  import Page from './lib/flowbite/Page.svelte';

  import {
    IconGlobe,
    IconHome,
    IconOff,
    IconX,
  } from "./assets/icons";
  import { Match } from "svelte-store-router";
  import { route } from "./router_stores";
  export let loading = false;
  const handleLogout = () => {
    sleep(1000).then(logOut);
  };


</script>



  <Match route={$route} pattern="/">
    <Page>

 
       Start
   
    </Page>
  </Match>
  <Match route={$route} pattern="/archiv">
    <Page>
     Archiv
    </Page>
  </Match>
  <Match route={$route} pattern="/users">
    <Page>
      <span class="py-4">
        <JeListPage></JeListPage>
      </span>
    </Page>
  </Match>
  <Match route={$route} pattern="/users/:id" let:params={{ id }}>
    <Page>
      <span class="py-4">
            User: {id}
      </span>
     
    </Page>
  </Match>

