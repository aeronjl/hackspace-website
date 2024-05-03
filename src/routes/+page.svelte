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

		<div>
			<div class="border bg-amber-600 text-amber-50 px-4 py-6">
				<p class="md:text-6xl text-2xl mb-6">
					We want more exploratory scientific and technological work to happen in the UK.
				</p>

				<p>
					The present social and cultural environment in the UK isn’t conducive to exceptionally
					talented, early-career scientists and technologists embarking on ambitious projects.
				</p>
			</div>
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
	</div>
{/if}
