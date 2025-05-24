<script lang="ts">
	import { CalculationMode } from '$lib/calculation';

	interface Props {
		title?: string;
		baseDate: Date;
		mode: CalculationMode;
		calendar?: string;
	}

	let { title = '', baseDate = new Date(), mode, calendar = 'gregorian' }: Props = $props();
	// $inspect('baseDate', baseDate, 'baseTime', baseTime, showDate, showTime);

	let { year, month, day } = $derived.by(() => {
		return {
			year: baseDate.getFullYear(),
			month: baseDate.getMonth() + 1,
			day: baseDate.getDate()
		};
	});

	let { hour, minute, second } = $derived.by(() => {
		return {
			hour: baseDate.getHours(),
			minute: baseDate.getMinutes(),
			second: baseDate.getSeconds()
		};
	});
	let showDate = $derived.by(() => {
		return mode === CalculationMode.DateAndTime || mode === CalculationMode.DateOnly;
	});
	let showTime = $derived.by(() => {
		return mode === CalculationMode.DateAndTime || mode === CalculationMode.TimeOnly;
	});
	let maxMonths = $derived.by(() => {
		return 12; // Default to Gregorian
	});
	let displayedTitle = $derived.by(() => {
		if (title) {
			return title;
		}

		if (mode === CalculationMode.DateAndTime) {
			return 'Date/Time';
		} else if (mode === CalculationMode.DateOnly) {
			return 'Date';
		} else if (mode === CalculationMode.TimeOnly) {
			return 'Time';
		}
	});
</script>

<div class="component">
	<h3 class="title">{displayedTitle}</h3>
	<table>
		<tbody>
			{#if showDate}
				<tr>
					<td><input id="year" type="number" bind:value={year} /></td>
					<td><span class="date-divider">&ndash;</span></td>
					<td>
						<!-- <input id="month" type="month" bind:value={month} /> -->
						<select id="month">
							{#each Array(maxMonths) as _, i}
								<option value={i + 1} selected={i + 1 === month}>
									{new Date(0, i).toLocaleString('default', { month: 'long' })}
								</option>
							{/each}
						</select>
					</td>
					<td><span class="date-divider">&ndash;</span></td>
					<td><input id="day" type="number" bind:value={day} /></td>
				</tr>
				<tr>
					<td><label for="year"><span class="label">Year</span></label> </td>
					<td></td>
					<td><label for="month"><span class="label">Month</span></label> </td>
					<td></td>
					<td><label for="date"><span class="label">Day</span></label> </td>
				</tr>
			{/if}
			{#if showTime}
				<tr>
					<td><input id="hour" type="number" bind:value={hour} /></td>
					<td><span class="date-divider">:</span></td>
					<td><input id="minute" type="number" bind:value={minute} /></td>
					<td><span class="date-divider">:</span></td>
					<td><input id="second" type="number" bind:value={second} /></td>
				</tr>
				<tr>
					<td><label for="hour"><span class="label">Hour</span></label> </td>
					<td></td>
					<td><label for="minute"><span class="label">Minute</span></label> </td>
					<td></td>
					<td><label for="second"><span class="label">Second</span></label> </td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>

<style>
</style>
