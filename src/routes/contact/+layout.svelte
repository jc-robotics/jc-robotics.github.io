<main class="flex flex-col md:container tracking-[0.065em] justify-center mx-auto">
	<h2 class="text-6xl font-black  mb-8">
		<span class="flex mb-8">We'd Love To Hear From You,</span>
		<span>Get In Touch <span class="wave">👋🏾</span></span>
	</h2>
	<slot/>
</main>
<style lang="scss">
	.wave {
		animation-name: wave-animation;
		animation-duration: 2s;
		animation-iteration-count: infinite;
		transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
		display: inline-block;
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		} /* The following five values can be played with to make the waving more or less extreme */
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		} /* Reset for the last half to pause */
		100% {
			transform: rotate(0deg);
		}
	}
</style>

