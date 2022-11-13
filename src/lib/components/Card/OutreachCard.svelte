<script lang="ts">
	export let outreachImg:string;
	export let title: string,
		description: string,
		link = '';
</script>

<!-- Card -->
<div class="relative flex flex-col rounded-md overflow-hidden bg-neutral-watermark m-0 p-0">
	<!-- Image -->
	<img src={outreachImg} alt="outreach events" class="object-cover h-40" />

	<!-- Info -->
	<div class="flex gap-2 flex-col items-center px-4 pb-4">
		<!-- Content -->
		<div class="mt-2 mb-6 flex gap-2 flex-col">
			<!-- Title -->
			<h4 class="text-md font-body tracking-wider font-bold">{title}</h4>
			<!-- Description -->

			<p>{description}</p>
		</div>

		<!-- Call to Action -->
		{#if link}
			<a
				href={link}
				class="text-sm font-body tracking-wider text-secondary font-extrabold text-center w-[80%] bg-red-500 inline-block rounded-sm"
				>Read More</a
			>
		{/if}
	</div>
</div>
