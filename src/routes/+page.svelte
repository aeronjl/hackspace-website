<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import mockup from '$lib/assets/mockup.png';
	import mockuptwo from '$lib/assets/mockup2.png';
	import mockupthree from '$lib/assets/mockup3.png';
	import { onMount } from 'svelte';
	import benji from '$lib/assets/headshots/benji.png';
	import calum from '$lib/assets/headshots/calum.png';
	import ursule from '$lib/assets/headshots/ursule.png';
	import aeron from '$lib/assets/headshots/aeron.webp';
	import aaliya from '$lib/assets/headshots/aaliya.png';

	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let visible = false;
	let showBiography = false;

	let currentPerson = null;

	let people = [
		{ id: 'benji', shortName: 'Benji', name: 'Benjamin Thoma', image: benji, bio: 'Postdoctoral Research Associate, UCL', project: 'origins-of-life research, scalable RNA-protein conjugate synthesis'},
		{ id: 'calum', shortName: 'Calum', name: 'Calum Drysdale', image: calum, bio: 'PhD Student, Imperial College', project: 'novel sampling and control mechanisms for bioreactors'},
		{ id: 'ursule', shortName: 'Ursule', name: 'Ursule Demaël', image: ursule, bio: 'PhD Candidate, UCL; Co-Managing Director, Nucleate', project: 'reprogramming the immune system to fight cancer'},
		{ id: 'aeron', shortName: 'Aeron', name: 'Aeron Laffere', image: aeron, bio: 'DPhil Candidate, University of Oxford', project: 'human interface design, mental health interventions, psychometrics'},
		{ id: 'aaliya', shortName: 'Aaliya', name: 'Aaliya Manji', image: aaliya, bio: 'Software Engineer, Wise', project: ''},
		{ id: 'oliver', shortName: 'Oliver', name: 'Oliver Hernandez', image: benji, bio: 'PhD Student, Imperial College', project: ''},
		{ id: 'matvey', shortName: 'Matvey', name: 'Matvey', image: benji, bio: '', project: ''},
		{ id: 'jack', shortName: 'Jack', name: 'Jack Wiseman', image: benji, bio: 'Generalist', project: 'Jackspace'}
	]

	onMount(() => {
		people.sort(() => 0.5 - Math.random());
		visible = true;
	});

	function openForm(): void {
		const url: string =
			'https://docs.google.com/forms/d/e/1FAIpQLSeAlNNQLhd5X4_SK5PU__lWW3ugq5Cfy57equ8MCOBqioc8SA/viewform?usp=sf_link';
		window.open(url, '_blank');
	}

	function openBiography(personId: string): void {
		currentPerson = people.find((person) => person.id === personId);
		showBiography = true;
	}

	function closeBiography(event: MouseEvent) {
    // This will check if the clicked element is the outer div itself
    if (event.target === event.currentTarget) {
      showBiography = false;
    }
  }

  // Function to stop event propagation
  function doNothing(event: MouseEvent) {
    event.stopPropagation();
  }
</script>

<svelte:head>
	<title>Jackspace</title>
</svelte:head>

{#if visible}
	<div class="font-geist">
		<div class="bg-emerald-900 py-4">
			<div class="mb-4 flex items-center justify-between px-4 text-emerald-50">
				<p class="">Jackspace</p>
				<div class="flex gap-x-6 pr-4">
					<a class="underline-offset-4 hover:underline" href="#mission">Mission</a>
					<a class="underline-offset-4 hover:underline" href="#team">Team</a>
				</div>
			</div>
			<hr />
			<h1
				in:fly={{ x: -400, duration: 1000 }}
				class="my-12 px-4 text-4xl text-emerald-50 transition-all duration-500 hover:-translate-y-1 md:text-6xl"
			>
				We are building a new centre for early-career scientists and technologists to do ambitious
				work in Central London.
			</h1>
		</div>

		<div class="flex-cols-3 mx-4 my-12 flex justify-center md:space-x-6 space-x-2">
			<div in:fade={{ duration: 1000, delay: 300 }}>
				<img
					alt="Artist's impression of the space 1"
					src={mockup}
					class="transition-all duration-1000 hover:translate-x-1"
				/>
			</div>
			<div in:fade={{ duration: 1000, delay: 600 }}>
				<img
					alt="Artist's impression of the space 2"
					src={mockuptwo}
					class="transition-all duration-1000 hover:translate-x-1"
				/>
			</div>
			<div in:fade={{ duration: 1000, delay: 900 }}>
				<img
					alt="Artist's impression of the space 3"
					src={mockupthree}
					class="transition-all duration-1000 hover:translate-x-1"
				/>
			</div>
		</div>

		<div
			id="mission"
			in:fade={{ duration: 1000 }}
			class="border bg-amber-600 px-4 py-6 text-amber-50"
		>
			<p class="mb-6 text-4xl transition-all duration-500 hover:translate-x-1 md:text-6xl">
				We want more exploratory scientific and technological work to happen in the UK.
			</p>
			<div class="text-lg">
				<p class="my-4 lg:w-1/2">
					The present social and cultural environment in the UK isn’t conducive to exceptionally
					talented, early-career scientists and technologists embarking on ambitious projects.
				</p>
				<p class="my-4">
					We’re building a space for technical work in Central London that fixes the problem.
				</p>
				<div class="py-6">
					<button
						on:click={openForm}
						class="border py-2 pl-2 pr-4 text-left transition-all duration-500 hover:bg-amber-50 hover:text-amber-900 md:text-2xl md:hover:pr-24"
					>
						If you are interested in joining us, please get in touch ->
					</button>
				</div>
			</div>
		</div>

		<div in:fade id="team" class="mx-4 my-12">
			<p class="my-6 text-4xl transition-all duration-500 hover:translate-x-1 md:text-6xl">
				Founding team
			</p>
			<p class="my-6 text-lg lg:w-1/2">
				We met through the <a class="underline" href="https://www.polaris-fellowship.com/"
					>Polaris Fellowship</a
				>, which has attracted some of the most exceptional, early-career scientists and
				technologists and fostered strong cultural bubbles in the group.
			</p>
			<div
				class="mx-4 my-12 grid grid-cols-2 justify-between gap-x-6 gap-y-6 xs:justify-start md:flex md:flex-wrap md:gap-x-12 md:gap-y-12"
			>
				{#each people as person}
				<button
					on:click={() => openBiography(person.id)}
					class="grid w-full grid-cols-1 space-y-4 transition-all duration-500 hover:-translate-y-1 sm:w-[200px]"
				>
					<img src={person.image} alt={person.shortName} class="rounded-full hover:shadow-md transition-shadow duration-500" />
					<p class="text-center">{person.shortName}</p>
				</button>
				{/each}
			</div>
		</div>

		{#if showBiography}
		<div
			on:click={closeBiography} transition:fade={{ duration: 400 }} class="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
		>
			<div on:click={doNothing}
				in:fly={{ x: -400, delay: 200}} class="mx-4 max-w-[600px] bg-emerald-900 text-emerald-50 p-8 relative shadow-lg"
			>
					<p class="my-2 text-2xl font-semibold">{currentPerson.name}</p>
					<p class="text-lg mb-4">{currentPerson.bio}</p>
					<p class="text-lg">
						<span class="font-semibold">Current project:</span> {currentPerson.project}
					</p>
					<button on:click={() => showBiography = false} class="absolute top-6 right-6">Close</button>
			</div>
		</div>
		{/if}
	</div>
{/if}
