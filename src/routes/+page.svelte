<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import mockup from '$lib/assets/mockup.png';
	import mockuptwo from '$lib/assets/mockup2.png';
	import mockupthree from '$lib/assets/mockup3.png';
	import { onMount } from 'svelte';

	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<div class="font-geist">
		<div class="bg-emerald-800 py-2">
			<div class="mb-4 flex justify-between px-4 text-sm text-emerald-50">
				<p class="font-semibold">London Jackspace</p>
				<div class="flex gap-x-4">
					<a href="">Mission</a>
					<a href="">Team</a>
				</div>
			</div>
			<hr />
			<h1
				in:fly={{ x: -400, duration: 1000 }}
				class="my-12 px-4 text-2xl text-emerald-50 md:text-6xl"
			>
				We are building a new centre for early-career scientists and technologists to do ambitious
				work in Central London.
			</h1>
		</div>

		<div class="flex-cols-3 mx-4 my-12 flex justify-center space-x-6">
			<div in:fade={{ duration: 1000, delay: 300 }}>
				<img alt="Artist's impression of the space 1" src={mockup} />
			</div>
			<div in:fade={{ duration: 1000, delay: 600 }}>
				<img alt="Artist's impression of the space 2" src={mockuptwo} />
			</div>
			<div in:fade={{ duration: 1000, delay: 900 }}>
				<img alt="Artist's impression of the space 3" src={mockupthree} />
			</div>
		</div>

		<div in:fade={{ duration: 1000 }} class="border bg-amber-600 px-4 py-6 text-amber-50">
			<p class="mb-6 text-2xl md:text-6xl">
				We want more exploratory scientific and technological work to happen in the UK.
			</p>
			<div class="text-md md:text-lg">
				<p class="my-4 lg:w-1/2">
					The present social and cultural environment in the UK isn’t conducive to exceptionally
					talented, early-career scientists and technologists embarking on ambitious projects.
				</p>
				<p class="my-4">
					We’re building a space for technical work in Central London that fixes the problem.
				</p>
			</div>
		</div>

		<div class="my-12">
			<p class="my-6 text-2xl md:text-6xl">Founding team</p>
			<div class="mx-4 flex flex-wrap justify-between">
				<div class="border">
					<p>Benji</p>
				</div>
				<div>
					<p>Calum</p>
				</div>
				<div>
					<p>Ursule</p>
				</div>
				<div>
					<p>Aeron</p>
				</div>
				<div>
					<p>Aaliya</p>
				</div>
				<div>
					<p>Matvey</p>
				</div>
				<div>
					<p>Jack</p>
				</div>
			</div>
		</div>
	</div>
{/if}
