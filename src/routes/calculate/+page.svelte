<script lang="ts">
	let { data } = $$props;
</script>

<form method="POST" action="/calculate">
	<div>
		<h2>Calculate</h2>
		<label for="year">Year:</label>
		<input type="text" name="year" placeholder="Enter year" value={data.from.year} required />
		<input type="text" name="month" placeholder="Enter month" value={data.from.month} required />
		<input type="text" name="day" placeholder="Enter day" value={data.from.day} required />
		<input type="text" name="hour" placeholder="Enter hour" value={data.from.hour} required />
		<input type="text" name="minute" placeholder="Enter minute" value={data.from.minute} required />
		<input type="text" name="second" placeholder="Enter second" value={data.from.second} required />
	</div>
	<div>
		<h2>Adjustments</h2>
		<input
			type="text"
			name="adjustment_year"
			placeholder="Enter year"
			value={data.adjustments.year}
			required
		/>
		<input
			type="text"
			name="adjustment_month"
			placeholder="Enter month"
			value={data.adjustments.month}
			required
		/>
		<input
			type="text"
			name="adjustment_day"
			placeholder="Enter day"
			value={data.adjustments.day}
			required
		/>
		<input
			type="text"
			name="adjustment_hour"
			placeholder="Enter hour"
			value={data.adjustments.hour}
			required
		/>
		<input
			type="text"
			name="adjustment_minute"
			placeholder="Enter minute"
			value={data.adjustments.minute}
			required
		/>
		<input
			type="text"
			name="adjustment_second"
			placeholder="Enter second"
			value={data.adjustments.second}
			required
		/>
	</div>
	<button type="submit">Calculate</button>
</form>
