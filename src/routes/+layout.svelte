<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	let { children } = $props();

	injectSpeedInsights();
</script>

<nav>
	<a href="/" class="title">Horology</a>
	<a href="/calculate">Calculate</a>
	<a href="/compare">Compare</a>
	<a href="/convert">Convert</a>
	<a href="/about">About</a>
</nav>

{@render children()}
