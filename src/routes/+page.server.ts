import type { Actions } from './$types';
import { KV_REST_API_TOKEN, KV_REST_API_URL } from '$env/static/private';
import { createClient } from '@vercel/kv';
import { fail, redirect } from '@sveltejs/kit';
import { Resend } from 'resend';

const resend = new Resend('re_4jE8hQrL_JVwjRsnoMCoKGT25VwaNsH19');

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
		const maxWordsProject = 250;
		const wordCountProject = projectMessage.trim().split(/\s+/).length;

		if (wordCountProject > maxWordsProject) {
			return fail(400, {
				error: `Your project description exceeds the maximum word limit of ${maxWordsProject} words.`,
				values: { name, email, projectMessage, interestsMessage } // To preserve form values
			});
		}

		const maxWordsInterests = 400;
		const wordCountInterests = interestsMessage.trim().split(/\s+/).length;

		if (wordCountInterests > maxWordsInterests) {
			return fail(400, {
				error: `Your interests and background description exceeds the maximum word limit of ${maxWordsInterests} words.`,
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

		const firstName = name.split(' ')[0];

		resend.emails.send({
			from: 'a new space <no-reply@x7f3k9z.com>',
			to: `${email}`,
			subject: 'Your application has been received',
			html: `<p>Dear ${firstName},</p> <p>Thank you for applying. We are in the process of raising funds in order to be able to welcome more members. We will contact you again when we have more information.</p>`
		});

		resend.emails.send({
			from: 'a new space <no-reply@x7f3k9z.com>',
			to: 'ajlaffere@gmail.com',
			subject: 'New application received',
			html: `<p>A new application has been received from ${name} (${email}).</p> <p>Project description: ${projectMessage}</p> <p>Interests and background: ${interestsMessage}</p>`
		})

		throw redirect(302, '/success');
	}
};
