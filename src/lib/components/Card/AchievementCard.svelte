<script lang="ts">
	import trophyIcon from '$lib/images/trophy.png';
	export let awardName: string;
	export let subtext = "";
	export let date: string;
</script>

<div class="flex items-center gap-3 glow">
	<!-- Icon -->
	<div class={`flex w-20 bg-primary opacity-90 rounded-full p-3 aspect-square`}>
		<img src={trophyIcon} alt="" />
	</div>

	<!-- Content -->
	<div class="">
		<!-- Metadata -->
		<div>
			<!-- Title -->
			<h3>{awardName}</h3>
			<!-- Subtext -->
			{#if subtext}
				<h4>{subtext}</h4>
			{/if}
			<!-- Date -->
			<h5>{date}</h5>
		</div>
	</div>
</div>

<style>
	.glow:is(:active, :focus, :hover) > div:has(img) {
		box-shadow: 0px 0px 52px rgba(30, 115, 190, 0.91);
	}
</style>
