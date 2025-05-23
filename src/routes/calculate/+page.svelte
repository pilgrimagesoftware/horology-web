<script lang="ts">
	import { onMount } from 'svelte';
	import DateTimeInput from '$lib/DateTimeInput.svelte';
	import ModeSelector from '$lib/ModeSelector.svelte';
	import AdjustmentInput from '$lib/AdjustmentInput.svelte';
	import DateTimeOutput from '$lib/DateTimeOutput.svelte';

	let mode: 'datetime' | 'date' | 'time' = 'datetime';
	let format: 'long' | 'short' | 'iso8601' = 'long';

	// Base date and time
	let now = new Date();
	let baseDate: string = now.toLocaleDateString();
	let baseTime: string = now.toLocaleTimeString();

	// Adjustment values
	let adjust = {
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	let result: Date;

	function formatSelected() {
		calculateResult();
	}

	function modeSelected() {}

	function calculateResult() {
		const now = new Date();

		const [year, month, day] = baseDate
			? baseDate.split('-').map(Number)
			: [now.getFullYear(), now.getMonth() + 1, now.getDate()];
		const [hour, minute] = baseTime ? baseTime.split(':').map(Number) : [0, 0];

		let date = new Date(year, month - 1, day, hour, minute, 0);

		if (mode === 'datetime' || mode === 'date') {
			date.setFullYear(date.getFullYear() + adjust.years);
			date.setMonth(date.getMonth() + adjust.months);
			date.setDate(date.getDate() + adjust.days);
		}

		if (mode === 'datetime' || mode === 'time') {
			date.setHours(date.getHours() + adjust.hours);
			date.setMinutes(date.getMinutes() + adjust.minutes);
			date.setSeconds(date.getSeconds() + adjust.seconds);
		}

		result = new Date(); // date;
	}

	$: calculateResult();
</script>

<h2>Calculate</h2>

<div class="section">
<ModeSelector bind:mode />
</div>

<div class="section">
<!-- Base Date/Time Input -->
<DateTimeInput
	{baseDate}
	{baseTime}
	showDate={mode === 'datetime' || mode === 'date'}
	showTime={mode === 'datetime' || mode === 'time'}
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
