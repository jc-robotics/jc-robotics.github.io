<script lang="ts">
	export let toggle = false;
</script>

<!-- Hamburger -->
<div
	class="relative md:hidden w-6 h-5"
	on:click|preventDefault|stopPropagation={() => (toggle = !toggle)}
>
	<div class="absolute inset-0 flex flex-col justify-between -translate-x-5">
		<span
			class={`origin-top-left relative transistion ease-out duration-300 w-full h-1/4 bg-white rounded-full ${
				toggle && ' rotate-45'
			}`}
		/>
		<span
			class={`relative transistion ease-out duration-300 w-full h-1/4 bg-white rounded-full translate-x-1 ${
				toggle && 'opacity-0 translate-x-3 scale-0'
			}`}
		/>
		<span
			class={`origin-bottom-left relative transistion ease-out duration-300 w-full h-1/4 bg-white rounded-full ${
				toggle && '-rotate-45'
			}`}
		/>
	</div>
</div>
