<script lang="ts">
	import ProfileIcon from './ProfileIcon.svelte';
	import type { Profile } from '$lib/types/Profile';
	export let profiles: Profile[];
	export let picked: Profile;
</script>

<div class="flex flex-col relative gap-4">
	<h6 class="text-rich-black text-xl font-semibold opacity-80 underline">Tap to view members</h6>
	<div class="grid justify-around grid-cols-7 gap-3">
		{#each profiles as profile}
			<ProfileIcon {profile} onClick={() => (picked = profile)} />
		{/each}
	</div>
</div>
