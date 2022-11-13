<script lang="ts">
	import arrow from '$lib/assets/images/arrow.svg';
	import type { ArticleMetaData } from '$lib/types/Article';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import type { Profile } from '$lib/types/Profile';
	import { getProfile } from '$lib/scripts/profiles';
	import MetaTag from './MetaTag.svelte';
	export let metadata: ArticleMetaData;
	let postImg: string;
	let author = getProfile({ id: metadata.authorId });
	onMount(async () => {
		postImg = (await import(`../../../routes/resources/blog/[slug]/articles/images/${metadata.imageUrl}.jpg`))
			.default;
			console.log(postImg)
	});
</script>

<!-- Post as Spotlight -->
<div
	class="xs:hidden 2xs:hidden hidden md:grid grid-cols-10 grid-rows-1 gap-2 mb-8 md:container w-full"
>
	<!-- Image -->
	<div class="row-span-full col-end-11 col-span-6 self-center">
		<img class="object-cover w-full  rounded-md" src={postImg} alt="" />
	</div>
	<!-- Info -->
	<div
		class="col-start-1 col-span 3 flex flex-col justify-between row-span-full col-span-6 col-end-7 self-center p-4"
	>
		<div class="flex flex-col mb-6">
			<!-- Date Published -->
			<h3 class="font-body text-rich-black">{metadata?.datePublished}</h3>
			<!-- Post Title -->
			<h3 class=" text-neutral-ultra font-bold text-5xl leading-[1.4] rounded-full">
				<span class="inline text-neutral-ultra bg-white  highlight">{metadata?.title}</span>
			</h3>

			<!-- Read Time -->
			<h3 class="font-body text-rich-black">
				{`${metadata.readTime} ${metadata.readTime === '1' ? 'min' : 'mins'} read`}
			</h3>

			<!-- Author
			<div class="flex gap-2 items-center">
				<img class="w-8 rounded-full" src={author?.imageUrl} alt="author" />
				<h6 class="text-sm font-normal text-rich-black font-montserrat">{author?.name}</h6>
			</div> -->
		</div>

		<!-- Call To Action -->
		<div class="transistion duration-200 flex flex-col mb-4">
			<a
				href={`/resources/blog/${metadata.slug}`}
				class="group flex gap-1 items-center border-b-4 border-b-bangladesh-green"
			>
				<span
					class="capitalize text-bangladesh-green font-semibold transistion duration-200  group-hover:underline md:text-xl "
					>Read full Article</span
				>
				<img
					class="transistion duration-200 group-hover:translate-x-1 group-hover:scale-110"
					src={arrow}
					alt="arrow"
				/>
			</a>
			<!-- Tags -->
			<div class="flex gap-2 mt-2">
				{#each metadata.tags as tag}
					<MetaTag {tag}/>
				{/each}
			</div>
		</div>
	</div>
</div>

<!-- Render as normal Post on Mobile Screens -->
<div class="ml-3 flex container w-full xs:flex 2xs:flex md:hidden">
	<!-- Post Mobile and Larger -->
	<a
		href={`/resources/blog/${metadata.slug}`}
		class="xs:hidden 2xs:hidden flex md:hidden gap-2 mb-8 cursor-pointer"
	>
		<!-- Image -->
		<img class=" self-start w-[50%]" src={postImg} alt="" />

		<!-- Info -->
		<div class="flex flex-col justify-between">
			<!-- Contextual Info -->
			<div class="flex flex-col">
				<!-- Post Title -->
				<h3 class="font-bold text-xl font-montserrat md:text-3xl">{metadata.title}</h3>
				<!-- Meta Data -->
				<div class="flex text-sm items-center gap-[0.1em] font-body mb-2">
					<!-- Read Time -->
					<h3 class="text-rich-black">
						{`${metadata.readTime} ${metadata.readTime === '1' ? 'min' : 'mins'} read`}
					</h3>
					<!-- Dot -->
					<span class="inline-block w-4 aspect-1 bg-rich-black rounded-full scale-[25%]" />
					<!-- Date Published -->
					<h3 class="font-body text-rich-black">{metadata.datePublished}</h3>
				</div>
				<!-- Author -->

				<div class="flex gap-2 items-center">
					<img class="w-8 rounded-full" src={author?.imageUrl} alt="author" />
					<h6 class="text-sm font-normal text-rich-black font-montserrat">{author.name}</h6>
				</div>
			</div>
			<!-- Call To Action -->
			<div class="transistion duration-200 flex flex-col mb-4">
				<a href={`/resources/blog/${metadata.slug}`} class="group flex gap-1 items-center">
					<span
						class="capitalize text-bangladesh-green font-semibold transistion duration-200  group-hover:underline md:text-xl "
						>Read full Article</span
					>
					<img
						class="transistion duration-200 group-hover:translate-x-1 group-hover:scale-110"
						src={arrow}
						alt="arrow"
					/>
				</a>
				<!-- Tags -->
				<div class="flex gap-2 mt-2">
					{#each metadata.tags as tag}
						<MetaTag {tag}/>
					{/each}
				</div>
			</div>
		</div>
	</a>

	<!-- Xtra Small Screens -->
	<a
		href={`/resources/blog/${metadata.slug}`}
		class="xs:flex 2xs:flex flex-col gap-2 mb-8 cursor-pointer hidden"
	>
		<!-- Image -->
		<img class=" self-start w-[80%]" src={postImg} alt="" />

		<!-- Info -->
		<div class="flex flex-col justify-between">
			<!-- Contextual Info -->
			<div class="flex flex-col">
				<!-- Post Title -->
				<h3 class="font-bold text-xl font-body md:text-3xl">{metadata.title}</h3>
				<!-- Meta Data -->
				<div class="flex text-sm items-center gap-[0.1em] font-body mb-2">
					<!-- Read Time -->
					<h3 class="text-rich-black">
						{`${metadata.readTime} ${metadata.readTime === '1' ? 'min' : 'mins'} read`}
					</h3>
					<!-- Dot -->
					<span class="inline-block w-4 aspect-1 bg-rich-black rounded-full scale-[25%]" />
					<!-- Date Published -->
					<h3 class="font-montserrat text-rich-black">{metadata.datePublished}</h3>
				</div>
				<!-- Author -->

				<div class="flex gap-2 items-center">
					<img class="w-8 rounded-full" src={author?.imageUrl} alt="author" />
					<h6 class="text-sm font-normal text-rich-black font-montserrat">{author.name}</h6>
				</div>
			</div>
			<!-- Call To Action -->
			<div class="transistion duration-200 flex flex-col mb-4">
				<a href={`/resources/blog/${metadata.slug}`} class="group flex gap-1 items-center">
					<span
						class="capitalize text-bangladesh-green font-semibold transistion duration-200  group-hover:underline md:text-xl "
						>Read full Article</span
					>
					<img
						class="transistion duration-200 group-hover:translate-x-1 group-hover:scale-110"
						src={arrow}
						alt="arrow"
					/>
				</a>
				<!-- Tags -->
				<div class="flex gap-2 mt-2">
					{#each metadata.tags as tag}
						<MetaTag {tag} />
					{/each}
				</div>
			</div>
		</div>
	</a>
</div>

<style lang="scss">
	.highlight {
		box-shadow: 0.2em 0 0 white, -0.2em 0 0 white;
	}
</style>
