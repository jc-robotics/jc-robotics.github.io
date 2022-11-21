<script lang="ts">
	import SpotlightPost from '$lib/components/Post/SpotlightPost.svelte';

	import Post from '$lib/components/Post/Post.svelte';

	import type { PageServerLoad } from './+page.server';
	export let data: PageServerLoad;
	let [spotlightPost, ...posts] = data.articles.sort((a, b) =>
		a.datePublished < b.datePublished ? 1 : -1
	);
	import {fly} from 'svelte/transition'
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<main in:fly="{{ y:50, duration:500,delay:300}}" class="relative mt-5 md:mt-10 mb-10 px-10">
	<section class="flex md:container min-h-[50vh] md:h-[70vh] mx-auto w-full">
		<SpotlightPost metadata={spotlightPost} />
	</section>
	<section in:fly="{{ y:50, duration:500,delay:700}}"  class="md:container mx-auto">
		<!-- Posts -->
		<section class="w-full flex flex-col md:container pl-4 md:p-0 ">
			<h2 class="text-2xl font-montserrat font-semibold">Latest Posts</h2>

			{#each posts as metadata}
				<div class="flex container w-full xs:flex 2xs:flex">
					<Post {metadata} />
				</div>
			{/each}
			<h5 class="mt-6 mx-auto font-montserrat text-xl">No more posts, sorry 😔</h5>
		</section>
		<!-- Search -->
	</section>
</main>
