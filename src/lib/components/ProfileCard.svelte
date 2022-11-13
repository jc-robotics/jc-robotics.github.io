<script lang="ts">
	import type { Profile } from '$lib/types/Profile';
	export let profile: Profile;
</script>

<div
	class="2xs:hidden isolate relative container w-full grid grid-cols-11 grid-rows-7 px-10 max-w-xl"
>
	<!-- Profile -->
	<div
		class="relative z-5 p-4 flex flex-col gap-2 col-start-3 col-end-9 row-start-1 row-end-7
		xs:col-start-1 bg-white rounded-md shadow-sm thin-border"
	>
		<img class="thin-border rounded-md p-[0.75px]" src={profile.imageUrl} alt="profile" />
		<h4 class="text-2xl font-bebas-neue tracking-wide">{profile.name}</h4>

		<!-- Decorations -->
		<span
			class="rounded-md -z-10 block w-32 aspect-2 absolute bg-bangladesh-green -translate-x-12 -translate-y-12"
		/>
		<span
			class="rounded-md -z-10 block w-32 aspect-1 absolute bottom-0 right-0 bg-black translate-x-12 translate-y-8 thin-border"
		/>
		<span
			class="rounded-full z-10 block w-4 aspect-1 absolute bottom-0 left-0 bg-north-texas-green -translate-x-[50%] translate-y-[50%]"
		/>
		<span
			class="rounded-full z-15 block w-8 aspect-1 absolute bottom-0 left-0 bg-white -translate-x-[50%] translate-y-[50%]"
		/>
		<span
			class="rounded-sm z-15 block w-6 aspect-1 absolute -rotate-12 bg-yellow-400 bottom-0 right-0 translate-x-3 translate-y-3"
		/>
	</div>
	<!-- Intro -->
	<div
		class="font-montserrat text-sm thin-border z-10 flex gap-2 col-start-7 col-end-12 row-start-2 row-end-3 xs:col-start-6 bg-white p-3 rounded-md"
	>
		<p>{profile.intro}</p>
	</div>
	<!-- Social -->
	{#if profile.socials}
		<div
			class="font-montserrat font-medium thin-border z-10 flex flex-col
		w-fit col-start-1 row-start-3 row-end-6 bg-white rounded-md p-3 pr-8 xs:col-start-8 xs:col-end-11 xs:row-start-4 xs:row-end-7"
		>
			{#each profile.socials as { href, icon, name, username }}
				<a class="flex gap-2" {href}>
					<img src={icon} alt={name} class="w-4 h-4" />
					<span class="whitespace-nowrap">
						{username}
					</span>
				</a>
			{/each}
		</div>
	{/if}
</div>

<!-- 2Xtra small screens -->
<div
	class="hidden isolate relative container w-full 2xs:grid grid-cols-11 grid-rows-7 px-5 max-w-xl mx-auto"
>
	<!-- Profile -->
	<div
		class="relative z-5 p-4 flex flex-col gap-2 col-start-1 col-end-12 row-start-1 row-end-9
		xs:col-start-1 bg-white rounded-md shadow-sm thin-border"
	>
		<img class="thin-border rounded-md p-[0.75px]" src={profile.imageUrl} alt="profile" />
		<div class="container flex flex-col gap-1">
			<h4 class="text-2xl font-bebas-neue tracking-wide">{profile.name}</h4>
			{#if profile.socials}
				<div
					class="font-montserrat font-medium thin-border z-10 flex w-fit bg-white rounded-md p-1"
				>
					{#each profile.socials as { href, icon, name, username }}
						<a class="flex" {href}>
							<img src={icon} alt={name} class="w-4 h-4" />
						</a>
					{/each}
				</div>
			{/if}
		</div>
		<!-- Intro -->
		<div
			class="font-montserrat text-sm z-10 flex gap-2 col-start-1 col-end-12 row-start-6 row-end-7 bg-white rounded-md"
		>
			<p>
				{profile.intro}
			</p>
		</div>
		<!-- Decorations -->
		<span
			class="rounded-md -z-10 block w-32 aspect-2 absolute bg-bangladesh-green -translate-x-8 -translate-y-12"
		/>
		<span
			class="rounded-md -z-10 block w-32 aspect-1 absolute bottom-0 right-0 bg-black translate-x-2 translate-y-4 thin-border"
		/>
		<span
			class="rounded-full z-10 block w-4 aspect-1 absolute bottom-0 left-0 bg-north-texas-green -translate-x-[50%] translate-y-[50%]"
		/>
		<span
			class="rounded-full z-15 block w-8 aspect-1 absolute bottom-0 left-0 bg-white -translate-x-[50%] translate-y-[50%]"
		/>
		<span
			class="rounded-sm z-15 block w-6 aspect-1 absolute -rotate-12 bg-yellow-400 bottom-0 right-0 translate-x-3 translate-y-3"
		/>
	</div>
</div>

<style lang="scss">
	.thin-border {
		$thickness: 0.8px;
		box-shadow: 0 0 0 $thickness black;
	}
</style>
