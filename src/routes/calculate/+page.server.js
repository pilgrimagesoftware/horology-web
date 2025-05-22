import * as api from '$lib/server/api.js';

export function load() {
	return {
		from: {
			year: 2023,
			month: 1,
			day: 1,
			hour: 0,
			minute: 0,
			second: 0
		},
		adjustments: {
			year: 1,
			month: 1,
			day: 1,
			hour: 0,
			minute: 0,
			second: 0
		},
        mode: 'dateAndTime',
	};
}
