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

<div class="px-6 py-2">
	{#if visible}
    <div class="text-sm flex justify-between mt-2 mb-4">
    <p class="font-semibold">London Jackspace</p>
    <div class="flex">
        <a href="">Mission</a>
    </div>
    </div>
    <hr />
		<h1 in:fly={{ x: -400, duration: 1000 }} class="my-12 md:text-6xl text-2xl font-semibold">
			We are building a new centre for early-career scientists and technologists to do ambitious
			work in Central London.
		</h1>

		<Carousel.Root class="my-6">
			<Carousel.Content>
				<Carousel.Item class="basis-1/3">
                    <img alt="Artist's impression of the space 1" src={mockup} />
                </Carousel.Item>
				<Carousel.Item class="basis-1/3">
					<img alt="Artist's impression of the space 2" src={mockuptwo} />
				</Carousel.Item>
				<Carousel.Item class="basis-1/3">
                    <img alt="Artist's impression of the space 3" src={mockupthree} /> 
                </Carousel.Item>
			</Carousel.Content>
		</Carousel.Root>

		<div>
			<p class="font-semibold">
				We want more exploratory scientific and technological work to happen in the UK.
			</p>

			<p>
				However, the social and cultural environment isn’t conducive to exceptionally talented,
				early-career scientists and technologists doing this.
			</p>
			<p class="my-6">
				We’re building a space for technical work in Central London that fixes the problem.
			</p>

			<div class="my-6">
				<p class="my-2 font-semibold">
					The new workspace will give the most-exceptional young scientists/technologists:
				</p>
				<ul class="list-inside list-disc space-y-2">
					<li>
						Access to a peer group; which raises ambition, provides examples of good taste,
						encourages, and has high expectations.
					</li>
					<li>
						A set of values; pro-technology, pro-progress, optimism, curiosity, non-conformity,
						ambitiousness.
					</li>
					<li>
						Tools; for laboratory science and manufacturing outside institutional constraints (e.g.
						university IP-constraints and the permission of supervisors)
					</li>
					<li>Access to private knowledge; of the frontier of fields and new opportunities.</li>
				</ul>
			</div>

			<p>
				We will judge our success on whether the workspaces’ members have more ideas, enter new
				collaborations, and start companies around their work that they otherwise wouldn’t have.
			</p>
		</div>
	{/if}
</div>
