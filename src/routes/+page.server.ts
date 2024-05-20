import type { Actions } from './$types';
import { kv } from '@vercel/kv';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const message = formData.get('message') as string;
		const link = formData.get('link') as string;

		// Generate a unique key for the KV store
		const key = `submission-${Date.now()}`;

		// Store the form data in Vercel KV
		await kv.set(key, {
			name,
			email,
			message,
			link
		});

		return {
			status: 302,
			headers: {
				location: '/thank-you'
			}
		};
	}
};
