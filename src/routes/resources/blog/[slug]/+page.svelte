<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
	import type { Profile } from '$lib/types/Profile';

	import axios from 'axios';

	import { onMount } from 'svelte';

	import type { PageLoad } from './+page.server';
	import SvelteMarkdown from 'svelte-markdown';
	import { getProfile } from '$lib/scripts/profiles';
	export let data: PageLoad;
	const author = getProfile({ id: data.metadata.authorId });
	const metadata = data.metadata;
	let postImg: string;
	onMount(async () => {
		postImg = (await import(`../[slug]/articles/images/${metadata.imageUrl}.jpg`)).default;
	});
</script>

<article class="prose lg:prose-xl px-8 m-auto my-4 sm:my-16">
	<img class="rounded-md" src={postImg} alt="blog post" />
	<h1>{data.metadata.title}</h1>
	<p>Published: {data.metadata.datePublished}</p>
	<p>By: {author.name}</p>

	<SvelteMarkdown source={data.content} />
</article>
