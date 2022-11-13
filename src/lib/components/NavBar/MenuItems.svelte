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
		<li class="flex "><a class="transistion duration-200 p-6 hover:bg-north-texas-green capitalize" {href}>{text}</a></li>
	{/each}
</ul>
