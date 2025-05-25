<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Horology</h1>

<main>
	<div class="large-button">
		<a href="/adjust">Adjust</a>
	</div>
	<div class="large-button">
		<a href="/compare">Compare</a>
	</div>
	<div class="large-button">
		<a href="/convert">Convert</a>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.large-button {
		background-color: var(--color-primary);
		color: lightgrey;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		text-decoration: none;
		font-size: 1.5rem;
		text-align: center;
		width: 200px;
	}

	.large-button:hover {
		background-color: var(--color-primary-dark);
	}
</style>
