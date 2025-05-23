<script lang="ts">
    let { mode = $bindable() } = $props();
		// let mode : 'datetime' | 'date' | 'time' = 'datetime';
        // let modeSelected = () => {
        //     // Handle mode selection change
        // };
        function modeSelected(event: Event) {
            // Handle mode selection change
            mode = event.target?.value;
        }
</script>

<!-- Mode Selector -->
<div class="section">
	<label for="mode">Mode:</label>
	<select id="mode" bind:value={mode} onchange={modeSelected}>
		<option value="datetime">Date & Time</option>
		<option value="date">Date Only</option>
		<option value="time">Time Only</option>
	</select>
</div>

<style>
</style>
