<script lang="ts">
	import { CalculationMode } from '$lib/calculation';

	let { mode = $bindable() } = $props();
	// let mode : 'datetime' | 'date' | 'time' = 'datetime';
	// let modeSelected = () => {
	//     // Handle mode selection change
	// };
	function modeSelected(event: Event) {
		// Handle mode selection change
		mode = event.target?.value as CalculationMode;
	}
</script>

<div class="component">
	<select id="mode" bind:value={mode} onchange={modeSelected}>
		<option value={CalculationMode.DateAndTime}>Date & Time</option>
		<option value={CalculationMode.DateOnly}>Date Only</option>
		<option value={CalculationMode.TimeOnly}>Time Only</option>
	</select>
	<label class="label" for="mode">Mode</label>
</div>

<style>
</style>
