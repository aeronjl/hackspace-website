<script lang="ts">
	import { cubicInOut, quintInOut } from 'svelte/easing';
	import { fly, fade } from 'svelte/transition';

	let showForm: boolean = false;
	let success = false;
	const maxWords = 200;
	let wordCount = 0;
	let message = '';
	let error = '';

	const toggleForm = () => {
		showForm = !showForm;
	};

	function countWords(text: string) {
		return text.trim().split(/\s+/).length;
	}

	function handleInput(event: Event) {
		const target = event.target as HTMLTextAreaElement;
		wordCount = countWords(target.value);
		if (wordCount > maxWords) {
			error = `You have exceeded the maximum word limit of ${maxWords} words.`;
		} else {
			error = '';
		}
	}

	function handleSubmit(event: Event) {
		if (wordCount > maxWords) {
			event.preventDefault();
			alert(`Please reduce your message to ${maxWords} words or less.`);
		}
	}
</script>

<svelte:head>
	<title>A new space</title>
</svelte:head>

<div in:fade class="mx-auto mt-24 flex max-w-[600px] flex-col gap-y-4 font-serif text-sm">
	<p class="">
		A private facility in Central London for the pursuit of the <a
			href="https://en.m.wikipedia.org/wiki/Useful_art"
			class="underline"
			target="_blank">useful arts</a
		>.
	</p>
	<p class="">For young scientists and technologists to work without institutional constraint.</p>
	<button on:click={toggleForm} class="text-left underline"> Register your interest </button>
	{#if showForm}
		<form
			on:submit={handleSubmit}
			transition:fly={{ easing: quintInOut, x: -10, duration: 1200 }}
			method="POST"
		>
			<div class="mb-4 flex flex-col">
				<label for="name" class="mb-1">Name</label>
				<input
					name="name"
					type="text"
					id="name"
					class="border border-black p-1"
					placeholder=""
					required
				/>
			</div>
			<div class="mb-4 flex flex-col">
				<label for="email" class="mb-1">Email</label>
				<input
					name="email"
					type="email"
					id="email"
					class="border border-black p-1"
					placeholder=""
					required
				/>
			</div>
			<div class="mb-4 flex flex-col">
				<label for="message" class="mb-1"
					>Describe what you would use the space for (200 words maximum)</label
				>
				<textarea
					name="message"
					id="message"
					class="border border-black p-1"
					placeholder=""
					bind:value={message}
					on:input={handleInput}
					required
				></textarea>
				{#if error}
					<p class="text-red-500">{error}</p>
				{/if}
			</div>
			<div class="mb-4 flex flex-col">
				<label for="message" class="mb-1"
					>If relevant, please provide a link to an online profile or portfolio of work</label
				>
				<input name="link" type="text" id="link" class="border border-black p-1" placeholder="" />
			</div>
			<button class="underline">Submit</button>
		</form>
	{/if}
</div>

<style>
</style>
