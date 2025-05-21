<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	// import { Statsig } from "@statsig/statsig-node-core";

	// const statsig = new Statsig(import.meta.env.STATSIG_SERVER_SECRET_KEY );
	// statsig.initialize();

	let { children } = $props();

	injectSpeedInsights();
	injectAnalytics();
</script>

<nav>
	<a href="/" class="title">Horology</a>
	<a href="/calculate">Calculate</a>
	<a href="/compare">Compare</a>
	<a href="/convert">Convert</a>
	<a href="/about">About</a>
</nav>

{@render children()}
