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

	onMount(() => {
		visible = true;
	});

    function openForm(): void {
        const url: string = "https://docs.google.com/forms/d/e/1FAIpQLSeAlNNQLhd5X4_SK5PU__lWW3ugq5Cfy57equ8MCOBqioc8SA/viewform?usp=sf_link";
        window.open(url, '_blank');
    }
</script>

{#if visible}
	<div class="font-geist">
		<div class="bg-emerald-800 py-4">
			<div class="mb-4 flex justify-between items-center px-4 text-emerald-50">
				<p class="">Jackspace</p>
				<div class="flex gap-x-6 pr-4">
					<a class="hover:underline underline-offset-4" href="#mission">Mission</a>
					<a class="hover:underline underline-offset-4" href="#team">Team</a>
				</div>
			</div>
			<hr />
			<h1
				in:fly={{ x: -400, duration: 1000 }}
				class="my-12 px-4 text-4xl text-emerald-50 md:text-6xl hover:-translate-y-1 transition-all duration-500"
			>
				We are building a new centre for early-career scientists and technologists to do ambitious
				work in Central London.
			</h1>
		</div>

		<div class="flex-cols-3 mx-4 my-12 flex justify-center space-x-6">
			<div in:fade={{ duration: 1000, delay: 300 }}>
				<img alt="Artist's impression of the space 1" src={mockup} class="hover:translate-x-1 transition-all duration-1000"/>
			</div>
			<div in:fade={{ duration: 1000, delay: 600 }}>
				<img alt="Artist's impression of the space 2" src={mockuptwo} class="hover:translate-x-1 transition-all duration-1000"/>
			</div>
			<div in:fade={{ duration: 1000, delay: 900 }}>
				<img alt="Artist's impression of the space 3" src={mockupthree} class="hover:translate-x-1 transition-all duration-1000"/>
			</div>
		</div>

		<div id="mission" in:fade={{ duration: 1000 }} class="border bg-amber-600 px-4 py-6 text-amber-50">
			<p class="mb-6 text-4xl md:text-6xl hover:translate-x-1 transition-all duration-500">
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
                <button on:click={openForm} class="md:text-2xl text-left border py-2 pl-2 pr-4 hover:pr-24 hover:bg-amber-50 hover:text-amber-900 transition-all duration-500">
                    If you are interested in joining us, please get in touch ->
                </button>
            </div>
			</div>
		</div>

		<div in:fade id="team" class="my-12 mx-4">
			<p class="my-6 md:text-6xl text-4xl hover:translate-x-1 transition-all duration-500">Founding team</p>
            <p class="my-6 text-lg lg:w-1/2">We met through the <a class="underline" href="https://www.polaris-fellowship.com/">Polaris Fellowship</a>, which has attracted some of the most exceptional, early-career scientists and technologists and fostered strong cultural bubbles in the group.</p>
			<div class="mx-4 flex flex-wrap md:gap-x-12 gap-x-4 md:gap-y-12 gap-y-4 my-12 xs:justify-start justify-between">
				<div class="sm:w-[200px] w-[100px] grid grid-cols-1 space-y-4 hover:-translate-y-1 transition-all duration-500">
                    <img src={benji} alt="Benji" class="rounded-full"/>
					<p class="text-center">Benji</p>
				</div>
                <div class="sm:w-[200px] w-[100px] grid grid-cols-1 space-y-4 hover:-translate-y-1 transition-all duration-500">
                    <img src={calum} alt="Benji" class="rounded-full"/>
					<p class="text-center">Calum</p>
				</div>
                <div class="sm:w-[200px] w-[100px] grid grid-cols-1 space-y-4 hover:-translate-y-1 transition-all duration-500">
                    <img src={ursule} alt="Benji" class="rounded-full"/>
					<p class="text-center">Ursule</p>
				</div>
                <div class="sm:w-[200px] w-[100px] grid grid-cols-1 space-y-4 hover:-translate-y-1 transition-all duration-500">
                    <img src={aeron} alt="Benji" class="rounded-full"/>
					<p class="text-center">Aeron</p>
				</div>
                <div class="sm:w-[200px] w-[100px] grid grid-cols-1 space-y-4 hover:-translate-y-1 transition-all duration-500">
                    <img src={aaliya} alt="Benji" class="rounded-full"/>
					<p class="text-center">Aaliya</p>
				</div>
                <div class="sm:w-[200px] w-[100px] grid grid-cols-1 space-y-4 hover:-translate-y-1 transition-all duration-500">
                    <img src={benji} alt="Benji" class="rounded-full"/>
					<p class="text-center">Matvey</p>
				</div>
                <div class="sm:w-[200px] w-[100px] grid grid-cols-1 space-y-4 hover:-translate-y-1 transition-all duration-500">
                    <img src={benji} alt="Benji" class="rounded-full"/>
					<p class="text-center">Jack</p>
				</div>
			</div>
		</div>
	</div>
{/if}
