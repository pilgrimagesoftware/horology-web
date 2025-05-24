<script lang="ts">
    import moment from 'moment';

    interface Props {
		title?: string ;
        date: Date;
        format: 'long' | 'short' | 'iso8601';
        mode: 'datetime' | 'date' | 'time';
    }

	let { title = 'Adjusted Date/Time', date, format, mode }: Props = $props();
	// let format: 'long' | 'short' | 'iso8601' = 'long';
	// let formatSelected = () => {};
	$inspect(date);
	$inspect(format);
	$inspect(mode);

	let formattedDate = $derived.by(() => {
		switch (format) {
			case 'long':
				switch (mode) {
					case 'datetime':
						return moment(date).format('dddd, MMMM D, YYYY h:mm:ss A');
					case 'date':
						return moment(date).format('dddd, MMMM D, YYYY');
					case 'time':
						return moment(date).format('h:mm:ss A');
				}
			case 'short':
				switch (mode) {
					case 'datetime':
						return moment(date).format('ddd, MMM D, YYYY h:mm:ss A');
					case 'date':
						return moment(date).format('ddd, MMM D, YYYY');
					case 'time':
						return moment(date).format('h:mm:ss A');
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

	function formatSelected(event: Event) {
		// Handle format selection change
		let newFormat = event.target?.value;
		format = newFormat;
	}
</script>

	<h3 class="title">{title}</h3>
	<p>{formattedDate}</p>

<style>
</style>
