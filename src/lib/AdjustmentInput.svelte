<script lang="ts">
    let { mode, adjust = $bindable() } = $props();
	// let mode : 'datetime' | 'date' | 'time' = 'datetime';
	// let adjust = {years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0};
</script>

<!-- Adjustment Inputs -->
<div class="section">
	<h3>Adjustments</h3>
	<div class="grid">
		{#if mode === 'datetime' || mode === 'date'}
			<label for="adj_years">Years:</label>
			<input id="adj_years" type="number" bind:value={adjust.years} />
			<label for="adj_months">Months:</label>
			<input id="adj_months" type="number" bind:value={adjust.months} />
			<label for="adj_days">Days:</label>
			<input id="adj_days" type="number" bind:value={adjust.days} />
		{/if}
		{#if mode === 'datetime' || mode === 'time'}
			<label for="adj_hours">Hours:</label>
			<input id="adj_hours" type="number" bind:value={adjust.hours} />
			<label for="adj_minutes">Minutes:</label>
			<input id="adj_minutes" type="number" bind:value={adjust.minutes} />
			<label for="adj_seconds">Seconds:</label>
			<input id="adj_seconds" type="number" bind:value={adjust.seconds} />
		{/if}
	</div>
</div>

<style>
</style>
