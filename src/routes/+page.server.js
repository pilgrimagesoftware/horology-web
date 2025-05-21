import { Statsig } from '@statsig/statsig-node-core';

// const statsig = new Statsig(import.meta.env.STATSIG_SERVER_SDK_KEY);
// await statsig.initialize();

export function load({ cookies, setHeaders }) {
	// const visited = cookies.get('visited');

	// cookies.set('visited', 'true', { path: '/' });

	// setHeaders({});

	return {
		// visited: visited === 'true'
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();

		// const result = await statsig.checkGate('test_gate', data);

		console.log('formData', formData);
	}
};
