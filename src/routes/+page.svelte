<script lang="ts">
	import { cubicInOut, quintInOut } from 'svelte/easing';
    import { slide, fly } from 'svelte/transition'

    let showForm: boolean = false;

    const toggleForm = () => {
        showForm = !showForm;
    }

</script>

<svelte:head>
	<title>A new space</title>
</svelte:head>

	<div class="flex flex-col gap-y-4 px-6 font-serif max-w-[600px] mx-auto mt-24 text-sm">
		<p class="">
			A private facility in Central London for the pursuit of the <a
				href="https://en.m.wikipedia.org/wiki/Useful_art"
				class="underline" target="_blank">useful arts</a
			>.
		</p>
		<p class="">
			For young scientists and technologists to work without institutional constraint.
		</p>
		<button
            on:click={toggleForm}
			class="underline text-left">
            Register your interest
        </button>
        {#if showForm}
		<form transition:fly={{easing: quintInOut, x: -10, duration: 1200}} method="POST">
			<div class="flex flex-col mb-4">
				<label for="name" class="mb-1">Name</label>
				<input type="text" id="name" class="border border-black p-1" placeholder="" />
			</div>
			<div class="flex flex-col mb-4">
				<label for="email" class="mb-1">Email</label>
				<input type="email" id="email" class="border border-black p-1" placeholder="" />
			</div>
			<div class="flex flex-col mb-4">
				<label for="message" class="mb-1">Describe what you would use the space for (200 words maximum)</label
				>
				<textarea id="message" class="p-1 border border-black" placeholder=""></textarea>
			</div>
            <div class="flex flex-col mb-4">
				<label for="message" class="mb-1">If relevant, please provide a link to an online profile or portfolio of work</label>
                <input type="text" id="link" class="border border-black p-1" placeholder="" />
			</div>
            <button class="underline">Submit</button>
		</form>
        {/if}
	</div>

<style>
</style>
