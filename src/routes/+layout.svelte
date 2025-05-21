<script lang="ts">
	let { children } = $props();
</script>

<nav>
	<a href="/" class="title">Horology</a>
	<a href="/calculate">Calculate</a>
	<a href="/compare">Compare</a>
	<a href="/convert">Convert</a>
	<a href="/about">About</a>
</nav>

{@render children()}
