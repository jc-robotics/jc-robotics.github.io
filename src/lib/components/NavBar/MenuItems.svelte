<script lang="ts">
	import type { Links } from '$lib/types/Link';

	export let links: Links;
	export const linksArray = Object.entries(links);
</script>

<!-- Menu Items -->
<ul
	class="hidden md:flex w-1/2 justify-around bg-bangladesh-green text-cornsilk text-xl font-bebas-neue rounded-b-sm"
>
	{#each linksArray as [text, { href }]}
		<li class="flex "><a class="relative transistion duration-200 p-6 capitalize after:bg-accent isolate after:z-[-10] | link" {href}>{text}</a></li>
	{/each}
</ul>

<style>
	.link::after{
		content:"";
		top:50%;
		transform-origin: left;
		display: flex;
		position:absolute;
		width: 100%;
		height:0.4rem;
		transform: translateX(-10%) scaleX(0);
		transition: transform 250ms ease-out;
	}
	.link:hover::after {

		transform: translateX(-10%) scaleX(50%);
	}
</style>