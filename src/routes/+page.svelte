<script lang="ts">
	import { cubicInOut, quintInOut } from 'svelte/easing';
	import { fly, fade } from 'svelte/transition';

	let showForm = false;
	const maxWordsProject = 250;
	const maxWordsInterests = 400;
	let wordCountProject = 0;
	let wordCountInterests = 0;
	let projectMessage = '';
	let interestsMessage = '';
	let errorProject = '';
	let errorInterests = '';

	const toggleForm = () => {
		showForm = !showForm;
	};

	const countWords = (text: string) => text.trim().split(/\s+/).length;

	const handleProjectInput = (event: Event) => {
		const target = event.target as HTMLTextAreaElement;
		wordCountProject = countWords(target.value);
		errorProject = wordCountProject > maxWordsProject
			? `You have exceeded the maximum word limit of ${maxWordsProject} words.`
			: '';
	};

	const handleInterestsInput = (event: Event) => {
		const target = event.target as HTMLTextAreaElement;
		wordCountInterests = countWords(target.value);
		errorInterests = wordCountInterests > maxWordsInterests
			? `You have exceeded the maximum word limit of ${maxWordsInterests} words.`
			: '';
	};

	const handleSubmit = (event: Event) => {
		if (wordCountProject > maxWordsProject || wordCountInterests > maxWordsInterests) {
			event.preventDefault();
			alert(`Please ensure all answers are within their respective word limits.`);
		}
	};
</script>

<svelte:head>
	<title>a new space</title>
</svelte:head>

<div in:fade class="mx-auto mt-24 flex max-w-[400px] flex-col gap-y-4 font-serif text-sm">
	<p>A private facility in Central London for the pursuit of the <a href="https://en.m.wikipedia.org/wiki/Useful_art" class="underline" target="_blank">useful arts</a> (hardware, the life sciences, and AI research).</p>
	<p>For young scientists and technologists to work, free from institutional constraints.</p>
	<button on:click={toggleForm} class="text-left underline">Apply to become a member</button>

	{#if showForm}
		<form on:submit={handleSubmit} transition:fly={{ easing: quintInOut, x: -10, duration: 1200 }} method="POST">
			<div class="mb-4 flex flex-col">
				<label for="name" class="mb-1">Name</label>
				<input name="name" type="text" id="name" class="border border-black p-1" required />
			</div>

			<div class="mb-4 flex flex-col">
				<label for="email" class="mb-1">Email</label>
				<input name="email" type="email" id="email" class="border border-black p-1" required />
			</div>

			<div class="mb-4 flex flex-col">
				<label for="projectMessage" class="mb-1">What project will you be working on in the first 6 weeks?</label>
				<small class="text-gray-500">250 words max.</small>
				<textarea name="projectMessage" id="projectMessage" class="border border-black p-1" bind:value={projectMessage} on:input={handleProjectInput} required></textarea>
				{#if errorProject}
					<p class="text-red-500">{errorProject}</p>
				{/if}
			</div>

			<div class="mb-4 flex flex-col">
				<label for="interestsMessage" class="mb-1">Generally, describe your interests and what you’ve done so far.</label>
				<small class="text-gray-500">We don’t care about badges, focus on the work itself. 400 words max.</small>
				<textarea name="interestsMessage" id="interestsMessage" class="border border-black p-1" bind:value={interestsMessage} on:input={handleInterestsInput} required></textarea>
				{#if errorInterests}
					<p class="text-red-500">{errorInterests}</p>
				{/if}
			</div>

			<button class="underline">Submit</button>
		</form>
	{/if}
</div>

<style>
	small {
		font-size: 0.875em;
		color: #6b7280;
		margin-top: -0.5em;
	}
</style>
