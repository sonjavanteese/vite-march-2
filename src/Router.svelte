<script>
  import {Route,router} from 'tinro';
	import { logOut } from './lib/db';
	import { user } from './lib/stores';
  import {sleep} from './lib/data/_list';
  import Page from './lib/flowbite/Page.svelte';
  import FetchJe from './lib/data/FetchJe.svelte';
  import {
    IconGlobe,
    IconHome,
    IconOff,
    IconX,
  } from "./assets/icons";
  router.mode.hash();

    
  export let loading = false;
  const handleLogout = () => {
    sleep(1000).then(logOut);
  };
$: heading = `Current URL: ${$router.path} | `;

</script>



  <Route path="/">
    <Page>
      <div slot="topbar" let:meta>
        {heading}
      </div>
 
       Start
   
    </Page>
  </Route>
  <Route path="/archiv" let:meta>
    <Page>
      <div slot="topbar">
        {heading} {meta.query.modal ? '' : 'OPEN'}
      </div>
     <div class="container px-4 mx-auto">
      <FetchJe refresh={true}></FetchJe>
     </div>
    </Page>
  </Route>
  <Route path="/users" let:meta>
    <Page>
      <div slot="topbar">
        {heading} {meta.query.modal ? '' : 'OPEN'}
      </div>
      <span class="py-4">
     User
      </span>
    </Page>
  </Route>
  <Route path="/user/:id" let:meta>
    <Page>
      <div slot="topbar">
        {heading} {meta.query.modal ? '' : 'OPEN'}
      </div>
      <span class="py-4">
            User: {meta.params.id}
      </span>
     
    </Page>
  </Route>

