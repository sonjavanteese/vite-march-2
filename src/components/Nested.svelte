<script>
  import { fly } from "svelte/transition";
  import { Match, Matcher } from "svelte-store-router";
  import { route } from "../router_stores";
</script>

<svelte:head>
  <title>Nested pages - svelte-store-router demo</title>
</svelte:head>

<section in:fly={{ y: 200 }}>
  <h4>Nested</h4>
  <div>
    <button on:click={() => ($route.path = "nested/subpage1")}>subpage 1</button>
    <button on:click={() => ($route.path = "nested/subpage2")}>subpage 2</button>
  </div>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nam dolor est ratione. Voluptatum, debitis exercitationem. Non, harum natus, autem tempora voluptatum aut error iusto aliquam, facilis nisi mollitia perferendis!
  </div>
  <Matcher>
    <Match route={$route} pattern="nested/subpage1" loose>
      <section in:fly={{ y: 200 }}>
        <div>
          Subpage 1
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem pariatur laboriosam sit sunt quaerat libero deserunt ad provident eum, molestias nobis eaque fugit maxime veritatis cumque quis exercitationem fuga at?
         </div>
      </section>
    </Match>
    <Match route={$route} pattern="nested/subpage2" loose>
      <section in:fly={{ y: 200 }}>
        <div>
          Subpage 2
        </div>
        <div>
          <button on:click={() => ($route.path = "nested/subpage2/page1")} href="nested/subpage2/page1">subpage 1</button>
          <button on:click={() => ($route.path = "nested/subpage2/page2")} href="nested/subpage2/page2">subpage 2</button>
        </div>
        <Matcher>
          <Match route={$route} pattern="nested/subpage2/page1">
            <section in:fly={{ y: 200 }}>Grand Subpage 1</section>
          </Match>
          <Match route={$route} pattern="nested/subpage2/page2">
            <section in:fly={{ y: 200 }}>Grand Subpage 2</section>
          </Match>
        </Matcher>
      </section>
    </Match>
  </Matcher>
</section>

<style>
  section {
    border: 1px solid #aaa;
    margin-top: 1rem;
    padding: 1rem;
  }
</style>
