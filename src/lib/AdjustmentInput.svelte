<script lang="ts">
	interface Props {
		title?: string;
		adjust: {
			years: number;
			months: number;
			days: number;
			hours: number;
			minutes: number;
			seconds: number;
		};
		mode: 'datetime' | 'date' | 'time';
	}

	let { title = 'Adjustments', mode, adjust = $bindable() }: Props = $props();
	// let mode : 'datetime' | 'date' | 'time' = 'datetime';
	// let adjust = {years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0};
	let showDate = $derived.by(() => {
		return mode === 'datetime' || mode === 'date';
	});
	let showTime = $derived.by(() => {
		return mode === 'datetime' || mode === 'time';
	});
</script>

<!-- Adjustment Inputs -->
<div class="component">
	<h3 class="title">{title}</h3>
	<table>
		<tbody>
			{#if showDate}
				<tr>
					<td><input id="years" type="number" bind:value={adjust.years} /></td>
					<td><input id="months" type="number" bind:value={adjust.months} /></td>
					<td><input id="days" type="number" bind:value={adjust.days} /></td>
				</tr>
				<tr>
					<td><label for="years"><span class="label">Years</span></label> </td>
					<td><label for="months"><span class="label">Months</span></label> </td>
					<td><label for="days"><span class="label">Days</span></label> </td>
				</tr>
			{/if}
			{#if showTime}
				<tr>
					<td><input id="hours" type="number" bind:value={adjust.hours} /></td>
					<td><input id="minutes" type="number" bind:value={adjust.minutes} /></td>
					<td><input id="seconds" type="number" bind:value={adjust.seconds} /></td>
				</tr>
				<tr>
					<td><label for="hours"><span class="label">Hours</span></label> </td>
					<td><label for="minutes"><span class="label">Minutes</span></label> </td>
					<td><label for="seconds"><span class="label">Seconds</span></label> </td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>

<style>
</style>
