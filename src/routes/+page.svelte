<script lang="ts">
    import { slide } from 'svelte/transition'

    let showForm: boolean = false;

    const toggleForm = () => {
        showForm = !showForm;
    }

</script>

<svelte:head>
	<title>A new space</title>
</svelte:head>

<div class="mx-auto flex h-screen flex-col items-center justify-center font-serif font-light">
	<div class="flex flex-col gap-y-6 px-6">
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
		<form transition:slide action="/" method="POST">
			<div class="flex flex-col mb-4">
				<label for="name" class="mb-1">Name</label>
				<input type="text" id="name" class="border border-black px-1" placeholder="" />
			</div>
			<div class="flex flex-col mb-4">
				<label for="email" class="mb-1">Email</label>
				<input type="email" id="email" class="border border-black px-1" placeholder="" />
			</div>
			<div class="flex flex-col mb-4">
				<label for="message" class="mb-1">In 200 words or fewer, describe what you would use the space for</label
				>
				<textarea id="message" class="px-1 border border-black" placeholder=""></textarea>
			</div>
            <div class="flex flex-col mb-4">
				<label for="message" class="mb-1">If relevant, please provide the link to an online profile or portfolio of work</label>
                <input type="text" id="link" class="border border-black px-1" placeholder="" />
			</div>
            <button class="underline">Submit</button>
		</form>
        {/if}
	</div>
</div>

<style>
</style>
