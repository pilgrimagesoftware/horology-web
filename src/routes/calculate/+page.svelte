<script lang="ts">
  import { onMount } from 'svelte';

  let mode: 'datetime' | 'date' | 'time' = 'datetime';

  // Base date and time
  let baseDate: string = '';
  let baseTime: string = '';

  // Adjustment values
  let adjust = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  let result: string = '';

  function calculateResult() {
    const now = new Date();

    const [year, month, day] = baseDate ? baseDate.split('-').map(Number) : [
      now.getFullYear(), now.getMonth() + 1, now.getDate()
    ];
    const [hour, minute] = baseTime ? baseTime.split(':').map(Number) : [0, 0];

    let date = new Date(year, month - 1, day, hour, minute, 0);

    if (mode === 'datetime' || mode === 'date') {
      date.setFullYear(date.getFullYear() + adjust.years);
      date.setMonth(date.getMonth() + adjust.months);
      date.setDate(date.getDate() + adjust.days);
    }

    if (mode === 'datetime' || mode === 'time') {
      date.setHours(date.getHours() + adjust.hours);
      date.setMinutes(date.getMinutes() + adjust.minutes);
      date.setSeconds(date.getSeconds() + adjust.seconds);
    }

    result = date.toISOString();
  }

  $: calculateResult();
</script>

<style>
  .grid {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .section {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 8px;
  }
</style>

<h2>Date/Time Adjuster</h2>

<!-- Mode Selector -->
<div class="section">
  <label for="mode">Mode:</label>
  <select id="mode" bind:value={mode}>
    <option value="datetime">Date & Time</option>
    <option value="date">Date Only</option>
    <option value="time">Time Only</option>
  </select>
</div>

<!-- Base Date/Time Input -->
<div class="section">
  <h3>Base Date and Time</h3>
  <div class="grid">
    <label for="date">Date:</label>
    <input id="date" type="date" bind:value={baseDate} />
    <label for="time">Time:</label>
    <input id="time" type="time" bind:value={baseTime} />
  </div>
</div>

<!-- Adjustment Inputs -->
<div class="section">
  <h3>Adjustments</h3>
  <div class="grid">
    <label for="adj_years">Years:</label>
    <input id="adj_years" type="number" bind:value={adjust.years} />
    <label for="adj_months">Months:</label>
    <input id="adj_months" type="number" bind:value={adjust.months} />
    <label for="adj_days">Days:</label>
    <input id="adj_days" type="number" bind:value={adjust.days} />
    <label for="adj_hours">Hours:</label>
    <input id="adj_hours" type="number" bind:value={adjust.hours} />
    <label for="adj_minutes">Minutes:</label>
    <input id="adj_minutes" type="number" bind:value={adjust.minutes} />
    <label for="adj_seconds">Seconds:</label>
    <input id="adj_seconds" type="number" bind:value={adjust.seconds} />
  </div>
</div>

<!-- Result Section -->
<div class="section">
  <h3>Adjusted Result</h3>
  <p>{result}</p>
</div>
