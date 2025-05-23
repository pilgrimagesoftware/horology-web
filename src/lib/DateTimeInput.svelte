<script lang="ts">
    let { baseDate, showDate, baseTime, showTime } = $props();
</script>

<div>
	<h3>Base Date and Time</h3>
	<div class="grid">
		{#if showDate}
			<label for="date">Date:</label>
			<input id="date" type="date" bind:value={baseDate} />
		{/if}
		{#if showTime}
			<label for="time">Time:</label>
			<input id="time" type="time" bind:value={baseTime} />
		{/if}
	</div>
</div>

<style>

</style>
