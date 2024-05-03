<script lang="ts">
    import mockup from '$lib/assets/mockup.png';
	import mockuptwo from '$lib/assets/mockup2.png';
	import mockupthree from '$lib/assets/mockup3.png';
</script>
<div class="font-geist">
    
    <h1 class="md:text-4xl text-3xl mx-6 pt-12 md:w-2/3">We are building a new centre for early-career scientists and technologists to do ambitious work in Central London.</h1>
    <p class="my-6 mx-6 md:w-2/3 md:text-xl text-large">The present social and cultural environment in the UK isn’t conducive to exceptionally talented, early-career scientists and technologists embarking on ambitious projects.</p>
    <p class="my-6 mx-6 md:w-2/3 md:text-xl text-large">We’re building a space for technical work in Central London that fixes the problem.</p>
    <button class="border py-2 pl-2 pr-6 mx-6 my-4 text-left md:text-center hover:bg-black border-black hover:text-white md:hover:pr-24 transition-all duration-500 md:text-xl ">If you are interested in joining us, please get in touch -></button>
    <div class="flex-cols-3 mx-6 my-12 flex justify-center md:space-x-6 space-x-2">
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

</div>