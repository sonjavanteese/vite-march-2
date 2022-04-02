<script>
	import { Matcher, Match } from 'svelte-store-router'
	import { route } from '../router_stores'
	import Books from './Books.svelte'
	import HSL from './HSL.svelte'
	import PageNotFound from './PageNotFound.svelte'
	import Navigation from './Navigation.svelte'
  import Nested from './Nested.svelte'
</script>
<div id="app">
<main>
	<header>
		<h1>
			<a href="https://github.com/zyxd/svelte-store-router">
				svelte-store-router
			</a>
		</h1>
		<p>
			You can try to reload this page, copy link to another browser, navigate forward or backward – entered data should not be lost
		</p>
		<Navigation/>
	</header>

	<Matcher>
		<Match route={$route} pattern="/">
			<Books/>
		</Match>
		<Match route={$route} pattern="/hsl">
			<HSL/>
		</Match>
    <Match route={$route} pattern="/nested" loose>
      <Nested/>
		</Match>
		<Match route={$route}>
			<PageNotFound/>
		</Match>
	</Matcher>
</main>
<footer>
<pre>
Full route:   {$route}
Path:         {$route.path}
Query:        {JSON.stringify($route.query)}
Fragment:     {JSON.stringify($route.fragment)}
</pre>
</footer>
</div>

<style>
	main {
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1.5rem;
		font-weight: 300;
		text-align: center;
		margin: 0;
		padding: 0.4rem 0;
	}

	h1 > a {
		color: inherit;
	}

	p {
		font-size: 0.8rem;
	}

	@media (min-width: 640px) {
		main {
			max-width: 600px;
		}
	}
</style>