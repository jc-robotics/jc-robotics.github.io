<script>
	import OutreachCard from '$lib/components/Card/OutreachCard.svelte';
	import heroImg from '$lib/images/hero.svg';
	import ScrollIcon from '$lib/components/ScrollIcon/ScrollIcon.svelte';
	import AchievementCard from '$lib/components/Card/AchievementCard.svelte';
	import { fly } from 'svelte/transition';
	import outreachImg from '$lib/images/immac-outreach.jpg'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main in:fly={{ y: 50, duration: 500, delay: 300 }} class="relative mt-5 md:mt-10 mb-10 px-10">
	<!-- Hero -->
	<section class="relative flex flex-col items-center md:items-start min-h-[90vh]">
		<!-- Watermark -->
		<span
			class="text-neutral-watermark text-5xl whitespace-nowrap absolute font-extrabold z-[-100] top-[15%] opacity-90 lg:text-9xl"
			>TRUE BLUE</span
		>

		<!-- Word Content -->
		<div class="flex flex-col items-center md:text-left md:items-start z-[100]">
			<!-- Heading-->
			<div
				class="flex flex-col text-md font-heading text-center items-center justify-center relative md:text-4xl lg:text-7xl md:text-left md:items-start"
			>
				<div
					class="before:block before:absolute before:-inset-1 before:rotate-2 before:bg-accent relative block z-[-10] w-fit "
				>
					<span class="relative text-neutral-light">Revolutionizing</span>
				</div>
				<div class="">Robotics and STEM</div>
				<div
					class="after:ml-1 after:inline-block after:aspect-square after:h-1 after:bg-accent after:rounded-full block"
				>
					in Jamaica
				</div>
			</div>
			<!-- Sub Heading -->
			<h2 class="mt-5 text-[0.6rem] text-center text-neutral-mid md:text-xl opacity-70 mb-10">
				<span>HOME OF TEAMS 6899 | 3981 </span>
			</h2>
			<ScrollIcon />
		</div>

		<!-- Hero Image stuff -->
		<div
			in:fly={{ y: 50, duration: 500, delay: 700 }}
			class=" mt-4 px-3 mb-10 md:absolute md:right-0 md:top-0 z-[-100]"
		>
			<img src={heroImg} alt="outreach events" class="object-fill max-h-[80vh]" />
		</div>
	</section>

	<!-- Achievements -->
	<section class="flex flex-col mt-4 gap-4">
		
		<div class="flex items-center gap-1">
			<span class="w-8 inline-block h-1 bg-white rounded-full" />
			<h3 class="text-md font-body tracking-wider text-secondary font-extrabold">Achievements</h3>
		</div>

		<!-- Cards -->
		<div class="flex gap-5 items-center relative">
			<ul class="grid grid-cols-2 h-full gap-14 md:flex md:flex-wrap">
				<li>
					<AchievementCard awardName={'Inspire Award'} date={'2013-2014'} />
				</li>
				<li>
					<AchievementCard awardName={'Design Award'} date={'2021-2022'} />
				</li>
				<li>
					<AchievementCard awardName={'Inspire Award'} subtext="2nd Runner Up" date="2021-2022" />
				</li>
				<li>
					<AchievementCard awardName={'Inspire Award'} date="2018-2019" />
				</li>
			</ul>
		</div>
		<div />
	</section>
	<!-- Outreaches -->
	<section class="flex flex-col mt-4 m-0">
		<div class="flex items-center gap-1 w-fit">
			<span class="w-8 inline-block h-1 bg-white rounded-full" />
			<h3 class="text-md font-body tracking-wider text-secondary font-extrabold">Outreaches</h3>
		</div>
		<!-- Cards -->
		<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
			<li>
				<OutreachCard {outreachImg} title="Immac / JC Collab" description="We partnered up with Blue Flames (Immaculate Robotics) to teach both of our club members about the drivetrain 🚗🤖."/>
			</li>
			
		</ul>
	</section>
</main>
