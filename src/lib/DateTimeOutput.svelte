<script lang="ts">
    import moment from 'moment';

    interface Props {
        date: Date;
        format: 'long' | 'short' | 'iso8601';
        mode: 'datetime' | 'date' | 'time';
    }

	let { date, format, mode }: Props = $props();
	// let format: 'long' | 'short' | 'iso8601' = 'long';
	// let formatSelected = () => {};
	$inspect(date);
	$inspect(format);
	$inspect(mode);

	var dateFormatter = buildDateFormatter(format);

	let formattedDate = $derived.by(() => {
		switch (format) {
			case 'long':
				switch (mode) {
					case 'datetime':
						return moment(date).format('dddd, MMMM D, YYYY h:mm A');
					case 'date':
						return moment(date).format('dddd, MMMM D, YYYY');
					case 'time':
						return moment(date).format('h:mm A');
				}
			case 'short':
				switch (mode) {
					case 'datetime':
						return moment(date).format('ddd, MMM D, YYYY h:mm A');
					case 'date':
						return moment(date).format('ddd, MMM D, YYYY');
					case 'time':
						return moment(date).format('h:mm A');
				}
			case 'iso8601':
				switch (mode) {
					case 'datetime':
						return moment(date).format('YYYY-MM-DDTHH:mm:ssZ');
					case 'date':
						return moment(date).format('YYYY-MM-DD');
					case 'time':
						return moment(date).format('HH:mm:ssZ');
				}
		}

		return '&mdash;';
	});

	function buildDateFormatter(fmt: string) {
		switch (fmt) {
			case 'long':
				return new Intl.DateTimeFormat('en-US', {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: 'numeric',
					hour: '2-digit',
					minute: '2-digit'
				});
			case 'short':
				return new Intl.DateTimeFormat('en-US', {
					weekday: 'short',
					year: 'numeric',
					month: 'short',
					day: 'numeric',
					hour: '2-digit',
					minute: '2-digit'
				});
			case 'iso8601':
				return undefined; // No formatter needed for ISO8601
		}
	}

	function formatSelected(event: Event) {
		// Handle format selection change
		let newFormat = event.target?.value;
		dateFormatter = buildDateFormatter(newFormat);
		format = newFormat;
	}
</script>

<div class="section">
	<h3>Adjusted Result</h3>
	<p>{formattedDate}</p>
	<select id="format" bind:value={format} onchange={formatSelected}>
		<option value="long">Long</option>
		<option value="short">Short</option>
		<option value="iso8601">ISO8601</option>
	</select>
</div>

<style>
</style>
