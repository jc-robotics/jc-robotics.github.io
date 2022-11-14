<div class="hidden md:flex gap-2 items-center">
	<!-- ScrollIcon -->
	<div
		class="relative w-5 h-10 bg-neutral-watermark rounded-full py-1  |  before:w-2 before:h-2 before:absolute before:aspect-square before:bg-accent before:flex before:left-[50%] before:-translate-x-[50%] before:rounded-full scroll"
	/>

	<!-- Text -->
	<div>
		<p>Scroll for more</p>
	</div>
</div>

<style>
	.scroll:before {
    transform-origin: center;
		animation: scrollAnimation 1s cubic-bezier(0, 0, 0.2, 1) 0s infinite;
	}
	@keyframes scrollAnimation {
		0% {
			top: 60%;
			opacity: 1;
		}
		100% {
			top: 10%;
			opacity: 0;
		}
	}
</style>
