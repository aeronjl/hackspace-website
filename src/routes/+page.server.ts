import type { Actions } from './$types';
import { KV_REST_API_TOKEN, KV_REST_API_URL, RESEND_API_TOKEN, ADMIN_EMAIL } from '$env/static/private';
import { createClient } from '@vercel/kv';
import { fail, redirect } from '@sveltejs/kit';
import { Resend } from 'resend';
import validator from 'validator';
import sanitizeHtml from 'sanitize-html';

const resend = new Resend(RESEND_API_TOKEN);

const kvClient = createClient({
	url: KV_REST_API_URL,
	token: KV_REST_API_TOKEN
});

const sendEmails = async (
	name: string,
	email: string,
	projectMessage: string,
	interestsMessage: string
) => {
	const firstName = name.split(' ')[0];

	await resend.emails.send({
		from: 'a new space <no-reply@x7f3k9z.com>',
		to: email,
		subject: 'Your application has been received',
		html: `<p>Dear ${firstName},</p>
			   <p>Thank you for applying. We are in the process of raising funds in order to be able to welcome more members. We will contact you again when we have more information.</p>`
	});

	await resend.emails.send({
		from: 'a new space <no-reply@x7f3k9z.com>',
		to: ADMIN_EMAIL,
		subject: 'New application received',
		html: `<p>A new application has been received from ${name} (${email}).</p>
			   <p>Project description: ${projectMessage}</p>
			   <p>Interests and background: ${interestsMessage}</p>`
	});
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name')?.toString() || '';
		const email = formData.get('email')?.toString() || '';
		const projectMessage = formData.get('projectMessage')?.toString() || '';
		const interestsMessage = formData.get('interestsMessage')?.toString() || '';
			
		// Check for empty fields
		if (!name) {
			return fail(400, {
				error: 'Please enter your name.',
				values: { name, email, projectMessage, interestsMessage }
			});
		}

		if (!email) {
			return fail(400, {
				error: 'Please enter your email address.',
				values: { name, email, projectMessage, interestsMessage }
			});
		}

		if (!projectMessage) {
			return fail(400, {
				error: 'Please enter a project description.',
				values: { name, email, projectMessage, interestsMessage }
			});
		}

		if (!interestsMessage) {
			return fail(400, {
				error: 'Please enter a description of your interests and background.',
				values: { name, email, projectMessage, interestsMessage }
			});
		}

		// Server-side word count validation
		const maxWordsProject = 250;
		const wordCountProject = projectMessage.trim().split(/\s+/).length;

		if (wordCountProject > maxWordsProject) {
			return fail(400, {
				error: `Your project description exceeds the maximum word limit of ${maxWordsProject} words.`,
				values: { name, email, projectMessage, interestsMessage }
			});
		}

		const maxWordsInterests = 400;
		const wordCountInterests = interestsMessage.trim().split(/\s+/).length;

		if (wordCountInterests > maxWordsInterests) {
			return fail(400, {
				error: `Your interests and background description exceeds the maximum word limit of ${maxWordsInterests} words.`,
				values: { name, email, projectMessage, interestsMessage }
			});
		}

		const timestamp = Date.now();
		const key = `submission-${timestamp}`;

		// Validate email format
		if (!validator.isEmail(email)) {
			return fail(400, {
				error: 'Please enter a valid email address.',
				values: { name, email, projectMessage, interestsMessage }
			});
		}

		// Sanitize user input
		const sanitizedName = sanitizeHtml(name);
		const sanitizedProjectMessage = sanitizeHtml(projectMessage);
		const sanitizedInterestsMessage = sanitizeHtml(interestsMessage);

		try {
			// Store the form data in Vercel KV
			await kvClient.set(key, {
				name: sanitizedName,
				email,
				projectMessage: sanitizedProjectMessage,
				interestsMessage: sanitizedInterestsMessage
			});

			await sendEmails(name, email, projectMessage, interestsMessage);

			throw redirect(302, '/success');
		} catch (error) {
			console.error('Error storing form data or sending emails:', error);
			return fail(500, {
				error: 'An error occurred while processing your application. Please try again later.',
				values: { name, email, projectMessage, interestsMessage }
			});
		}
	}
};
