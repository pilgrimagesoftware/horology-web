<script lang="ts">
	let { data } = $$props;
</script>

<form method="POST" action="?/calculate">
	<div>
		<h2>Calculate</h2>
		<div>
			<label for="year">Year</label>
			<input
				type="text"
				id="year"
				name="year"
				placeholder="Enter year"
				value={data.from.year}
				required
			/>
			<label for="month">Month</label>
			<input
				type="text"
				id="month"
				name="month"
				placeholder="Enter month"
				value={data.from.month}
				required
			/>
			<label for="day">Day</label>
			<input
				type="text"
				id="day"
				name="day"
				placeholder="Enter day"
				value={data.from.day}
				required
			/>
		</div>
		<div>
			<label for="hour">Hour</label>
			<input
				type="text"
				id="hour"
				name="hour"
				placeholder="Enter hour"
				value={data.from.hour}
				required
			/>
			<label for="minute">Minute</label>
			<input
				type="text"
				id="minute"
				name="minute"
				placeholder="Enter minute"
				value={data.from.minute}
				required
			/>
			<label for="second">Second</label>
			<input
				type="text"
				id="second"
				name="second"
				placeholder="Enter second"
				value={data.from.second}
				required
			/>
		</div>
	</div>
	<div>
		<h2>Adjustments</h2>
		<div>
			<label for="adjustment_year">Year</label>
			<input
				type="text"
				name="adjustment_year"
				placeholder="Enter year"
				value={data.adjustments.year}
				required
			/>
			<label for="adjustment_month">Month</label>
			<input
				type="text"
				name="adjustment_month"
				placeholder="Enter month"
				value={data.adjustments.month}
				required
			/>
			<label for="adjustment_day">Day</label>
			<input
				type="text"
				name="adjustment_day"
				placeholder="Enter day"
				value={data.adjustments.day}
				required
			/>
		</div>
		<div>
			<label for="adjustment_hour">Hour</label>
			<input
				type="text"
				name="adjustment_hour"
				placeholder="Enter hour"
				value={data.adjustments.hour}
				required
			/>
			<label for="adjustment_minute">Minute</label>
			<input
				type="text"
				name="adjustment_minute"
				placeholder="Enter minute"
				value={data.adjustments.minute}
				required
			/>
			<label for="adjustment_second">Second</label>
			<input
				type="text"
				name="adjustment_second"
				placeholder="Enter second"
				value={data.adjustments.second}
				required
			/>
		</div>
	</div>
	<div>
		<label for="mode">Mode</label>
		<select id="mode" name="mode" required>
			<option value="dateAndTime">Date and Time</option>
			<option value="dateOnly">Date Only</option>
			<option value="timeOnly">Time Only</option>
		</select>
	</div>
	<button type="submit">Calculate</button>
	<div>
		<h2>Result</h2>
		<p>{data.result}</p>
	</div>
</form>
