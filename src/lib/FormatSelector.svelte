<script lang="ts">
	interface Props {
		format: 'long' | 'short' | 'iso8601';
	}

	let { format = $bindable() }: Props = $props();

	function formatSelected(event: Event) {
		// Handle format selection change
		format = event.target?.value as 'long' | 'short' | 'iso8601';
	}
</script>

<div class="component">
	<select id="format" bind:value={format} onchange={formatSelected}>
		<option value="long">Long</option>
		<option value="short">Short</option>
		<option value="iso8601">ISO8601</option>
	</select>
	<label class="label" for="format">Format</label>
</div>

<style></style>
