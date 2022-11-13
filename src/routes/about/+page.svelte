<script lang="ts">
	import ProfileCard from '../../lib/components/ProfileCard.svelte';
	import ProfilePicker from '$lib/components/ProfilePicker.svelte';
	import type { Profile } from '$lib/types/Profile';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	export let data: { profiles: Profile[] };
	let pickedProfile: Profile = data.profiles[0];
	let teamSection: HTMLElement;
	onMount(() => {
		page.subscribe(() => {
			if ($page.url.hash === '#team') {
				if (teamSection) {
					teamSection.scrollIntoView({ behavior: 'smooth' });
				}
			}
		});
	});
</script>

<main class="container mx-auto w-full flex flex-col gap-8 md:gap-12 px-10">
	<!-- Who we are? -->
	<section id="who-we-are" class="flex flex-col justify-center mb-8 gap-6">
		<h2 class="text-center text-2xl text-rich-black  md:text-3xl ">Who we are?</h2>
		<p class="text-center text-rich-black font-body md:text-xl">
			This website was created by the Jamaica College Robotics Team to unite Jamaican Robotics teams
			as a community that will work together by uploading resources and information that will help
			other teams in the process of competing in the FIRST Tech Challenge. This website will inform
			you on all you need to know about this years FTC SKYSTONE Challenge. This will provide an in
			depth guide on the resources you need for your robotics team. As a science-driven institution,
			Jamaica College seeks to embrace the best practices for technological integration and value
			realization of our resources. We try our best to use technology in the appropriate ways to
			improve achievement and promote success in our students. Some of the projects include:
			implementing the Information Communication and Technology (ICT) Steering Committee;
			Integrating a School Management System, RENWeb; Subscribing to a n E-Library (EBSCO Host);
			Upgrading of Core Networks Infrastructure; Training for all staff members in the relevant
			technology as desired. Subsequently, The Jamaica College Robotics Club was formed in the year
			2009 to inspire high school students to be science and technology leaders and to pursue higher
			education and careers. It also engages students to cultivate engineering and technological
			skills through innovative thinking. Ever since its inception The Robotics Club has been an
			active part of the school's community, by giving the club attendees/members and to a lesser
			extent the rest of the school's population and opportunity to apply what is being thought in
			the classrooms. This Programme has re-ignite an interest in Science, Technology, Engineering
			and Mathematics (STEM) based courses, which is the way the world is mostly focus on currently.
		</p>
	</section>

	<!-- First Tech Challenge? -->
	<section id="ftc" class="flex flex-col justify-center mb-8 gap-6">
		<h2 class="text-center text-2xl text-rich-black md:text-3xl ">First Tech Challenge</h2>
		<p class="text-center text-rich-black font-body md:text-xl">
			It's way more than building robots. FIRST Tech Challenge teams (up to 15 team members, grades
			7-12) are challenged to design, build, program, and operate robots to compete in a
			head-to-head challenge in an alliance format. Guided by adult coaches and mentors, students
			develop STEM skills and practice engineering principles, while realizing the value of hard
			work, innovation, and working as a team. The robot kit is reusable from year to year and can
			be coded using a variety of levels of Java-based programming. Teams design and build robots,
			raise funds, design and market their team brand, and do community outreach to earn specific
			awards.
		</p>
	</section>

	<!-- Aim -->
	<section id="aim" class="flex flex-col justify-center mb-8 gap-6">
		<h2 class="text-center text-2xl text-rich-black md:text-3xl ">Aim</h2>
		<p class="text-center text-rich-black font-body md:text-xl">
			To inspire creative young minds to build work-efficient robots to assist humans in work and
			play. The club also serves the purpose of training and teaching young minds in their desired
			field of knowledge, whether it be engineering, programming, writing skills, etc. The club also
			does its best to spread the word of robotics and FIRST to Jamaica and the world.
		</p>
	</section>

	<!-- Mission -->
	<section id="mission" class="flex flex-col justify-center mb-8 gap-6">
		<h2 class="text-center text-2xl text-rich-black md:text-3xl ">Mission</h2>
		<p class="text-center text-rich-black font-body md:text-xl">
			Entrust our knowledge to the future members of our club in order to maintain sustainability.
			In addition, strive to achieve excellence in all aspects of the competition.
		</p>
	</section>
</main>
