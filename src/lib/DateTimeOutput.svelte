<script lang="ts">
	import moment from 'moment';
	import { DateFormatStyle, HourStyle } from '$lib/formatting';
	import { CalculationMode } from '$lib/calculation';
	import type { DateFormat } from './objects';

	interface Props {
		title?: string;
		date: Date;
		format: DateFormat;
		mode: CalculationMode;
	}

	let { title = 'Adjusted Date/Time', date, format, mode }: Props = $props();

	const TIME_LONG_12_HOUR_FORMAT = 'h:mm:ss A';
	const TIME_SHORT_12_HOUR_FORMAT = 'h:mm A';
	const TIME_LONG_24_HOUR_FORMAT = 'HH:mm:ss';
	const TIME_SHORT_24_HOUR_FORMAT = 'HH:mm';

    var hourFormat = $derived.by(() => {
		switch (format.formatStyle + '|' + format.hourStyle) {
			case DateFormatStyle.Long + '|' + HourStyle.TwelveHour:
				return TIME_LONG_12_HOUR_FORMAT;
			case DateFormatStyle.Long + '|' + HourStyle.TwentyFourHour:
				return TIME_LONG_24_HOUR_FORMAT;
			case DateFormatStyle.Short + '|' + HourStyle.TwelveHour:
			default:
				return TIME_SHORT_12_HOUR_FORMAT;
			case DateFormatStyle.Short + '|' + HourStyle.TwentyFourHour:
				return TIME_SHORT_24_HOUR_FORMAT;
		}
	});

	let formattedDate = $derived.by(() => {
		switch (format.formatStyle) {
			case DateFormatStyle.Long:
				switch (mode) {
					case CalculationMode.DateAndTime:
						return moment(date).format('dddd, MMMM D, YYYY ' + hourFormat);
					case CalculationMode.DateOnly:
						return moment(date).format('dddd, MMMM D, YYYY');
					case CalculationMode.TimeOnly:
						return moment(date).format(hourFormat);
				}
			case DateFormatStyle.Short:
				switch (mode) {
					case CalculationMode.DateAndTime:
						return moment(date).format('ddd, MMM D, YYYY ' + hourFormat);
					case CalculationMode.DateOnly:
						return moment(date).format('ddd, MMM D, YYYY');
					case CalculationMode.TimeOnly:
						return moment(date).format(hourFormat);
				}
			case DateFormatStyle.ISO8601:
				switch (mode) {
					case CalculationMode.DateAndTime:
						return moment(date).format('YYYY-MM-DDTHH:mm:ssZ');
					case CalculationMode.DateOnly:
						return moment(date).format('YYYY-MM-DD');
					case CalculationMode.TimeOnly:
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

<div class="component">
	<h3 class="title">{title}</h3>
	<p>{formattedDate}</p>
</div>

<style>
</style>
