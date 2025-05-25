<script lang="ts">
	import DateTimeInput from '$lib/DateTimeInput.svelte';
	import ModeSelector from '$lib/ModeSelector.svelte';
	import AdjustmentInput from '$lib/AdjustmentInput.svelte';
	import DateTimeOutput from '$lib/DateTimeOutput.svelte';
	import FormatSelector from '$lib/FormatSelector.svelte';
	import { DateFormatStyle, HourStyle } from '$lib/formatting';
	import { CalculationMode } from '$lib/calculation';
	import type { DateFormat, Adjustments } from '$lib/objects';

	let mode: CalculationMode = $state(CalculationMode.DateAndTime);
	let format: DateFormat = $state<DateFormat>({
		formatStyle: DateFormatStyle.Long,
		hourStyle: HourStyle.TwelveHour
	});

	// Base date and time
	let now = new Date();
	let baseDate: Date = now;

	// Adjustment values
	let adjust = $state<Adjustments>({
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	let result = $derived.by(() => {
		return new Date(
			baseDate.getFullYear() + adjust.years,
			baseDate.getMonth() + adjust.months,
			baseDate.getDate() + adjust.days,
			baseDate.getHours() + adjust.hours,
			baseDate.getMinutes() + adjust.minutes,
			baseDate.getSeconds() + adjust.seconds
		);
	});
</script>

<svelte:head>
	<title>Adjust</title>
</svelte:head>

<h1>Adjust a Date/Time</h1>

<div class="section">
	<!-- Base Date/Time Input -->
	<DateTimeInput title="Base Date/Time" {baseDate} {mode} />
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
	<FormatSelector bind:format={format.formatStyle} />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
</style>
