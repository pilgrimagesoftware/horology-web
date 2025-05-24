<script lang="ts">
	import DateTimeInput from '$lib/DateTimeInput.svelte';
	import ModeSelector from '$lib/ModeSelector.svelte';
	import AdjustmentInput from '$lib/AdjustmentInput.svelte';
	import DateTimeOutput from '$lib/DateTimeOutput.svelte';
	import FormatSelector from '$lib/FormatSelector.svelte';

	let mode: 'datetime' | 'date' | 'time' = $state('datetime');
	let format: 'long' | 'short' | 'iso8601' = $state('long');

	// Base date and time
	let now = new Date();
	let baseDate: Date = now;

	// Adjustment values
	let adjust = $state({
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	let result = $derived.by(() => {
		return new Date(baseDate.getFullYear() + adjust.years,
			baseDate.getMonth() + adjust.months,
			baseDate.getDate() + adjust.days,
			baseDate.getHours() + adjust.hours,
			baseDate.getMinutes() + adjust.minutes,
			baseDate.getSeconds() + adjust.seconds);
	});
</script>

<h2>Calculate</h2>

<div class="section">
<!-- Base Date/Time Input -->
<DateTimeInput
	title="Base Date/Time"
	{baseDate}
	{mode}
/>
</div>

<div class="section">
<!-- Adjustment Inputs -->
<AdjustmentInput {mode} bind:adjust />
</div>

<div class="section">
<!-- Result Section -->
<DateTimeOutput date={result} {format} {mode} />
</div>

<div class="section grid">
<ModeSelector bind:mode />
<FormatSelector bind:format />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
</style>
