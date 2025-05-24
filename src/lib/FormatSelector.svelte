<script lang="ts">
	import { DateFormatStyle, HourStyle } from '$lib/formatting';

	interface Props {
		format: DateFormatStyle;
	}

	let { format = $bindable() }: Props = $props();

	function formatSelected(event: Event) {
		// Handle format selection change
		format = event.target?.value as DateFormatStyle;
	}
</script>

<div class="component">
	<select id="format" bind:value={format} onchange={formatSelected}>
		<option value={DateFormatStyle.Long}>Long</option>
		<option value={DateFormatStyle.Short}>Short</option>
		<option value={DateFormatStyle.ISO8601}>ISO8601</option>
	</select>
	<label class="label" for="format">Format</label>
</div>

<style></style>
