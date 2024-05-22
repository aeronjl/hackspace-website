import type { Actions } from './$types';
import { KV_REST_API_TOKEN, KV_REST_API_URL } from '$env/static/private';
import { createClient } from '@vercel/kv';
import { fail, redirect } from '@sveltejs/kit';

const kv = createClient({
	url: KV_REST_API_URL,
	token: KV_REST_API_TOKEN
});

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name') as string;
		const email = formData.get('email') as string;
		const projectMessage = formData.get('projectMessage') as string;
		const interestsMessage = formData.get('interestsMessage') as string;

		// Check for empty fields
		if (!name || !email || !projectMessage || !interestsMessage) {
			return fail(400, {
				error: 'Please fill out all required fields.',
				values: { name, email, projectMessage, interestsMessage } // To preserve form values
			});
		}

		// Server-side word count validation
		const maxWords = 200;
		const wordCount = projectMessage.trim().split(/\s+/).length;

		if (wordCount > maxWords) {
			return fail(400, {
				error: `Your answer exceeds the maximum word limit of ${maxWords} words.`,
				values: { name, email, projectMessage, interestsMessage } // To preserve form values
			});
		}

		// Generate a unique key for the KV store
		const key = `submission-${Date.now()}`;

		// Store the form data in Vercel KV
		await kv.set(key, {
			name,
			email,
			projectMessage,
			interestsMessage
		});

		throw redirect(302, '/success');
	}
};
