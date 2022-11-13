<script lang="ts">
  import Spinner from './Spinner.svelte';

	import FormInput from './FormInput.svelte';
	import sendIcon from '$lib/assets/images/send-icon.svg';
	export let onSubmit: () => void;
	export let name: string, email: string, subject: string, message: string, isSending: boolean;
	let isFormFilled= false;
	$: {
		isFormFilled = !!(name && email && subject && message);
	}
</script>

<form method="post" class="container flex flex-col w-full leading-[1.5] font-montserrat mb-8">
	<input type="hidden" name="_next" value="/contact/thanks" />
	<input type="hidden" name="_captcha" value="false" />
	<input type="hidden" name="_subject" value={subject} />
	<div class="container w-full flex flex-col md:flex-row md:gap-2">
		<FormInput label="Your Name" name="name" placeholder="John Doe" bind:value={name} isRequired />
		<FormInput
			label="Your Email"
			name="email"
			placeholder="johndoe@gmail.com"
			bind:value={email}
			isRequired
		/>
	</div>
	<FormInput
		label="Subject"
		name="subject"
		placeholder="Google Meet Get Together"
		bind:value={subject}
		isRequired
	/>
	<FormInput
		isLongText={true}
		label="Message"
		name="message"
		placeholder="Hi, Would you like to meet with Country Z to talk about our robots..."
		bind:value={message}
		isRequired
	/>

	<button
		class={`mx-auto gap-2 flex transistion duration-[250ms] outline-none rounded-sm self-start max-w-full py-2 px-16 text-cornsilk   font-semibold   ${
			isFormFilled
				? 'bg-bangladesh-green hover:bg-north-texas-green hover:scale-105 cursor-pointer'
				: 'bg-gray-500 cursor-not-allowed'
		}`}
		type="submit"
		on:click|stopPropagation|preventDefault={onSubmit}
	>
		{#if isSending}
			<Spinner/>
			Sending
		{:else}
			Send
			<img class="scale-75" src={sendIcon} alt="send icon" />
		{/if}
	</button>
</form>
