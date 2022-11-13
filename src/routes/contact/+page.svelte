<script lang="ts">
	import { goto } from '$app/navigation';

	import axios from 'axios';

	import Form from '../../lib/components/Form.svelte';
	let isSending = false;
	let email: string, message: string, name: string, subject: string;
	async function sendEmail() {
		isSending = true;
		type Res = { success: 'true' | 'false'; message: string };
		const response: Res = (
			await axios.post('https://formsubmit.co/ajax/fc3952794181a9895bc3351b76ccd179', {
				name,
				email,
				subject,
				message
			})
		).data;
		if (response.success === 'true') {
			goto('/contact/thanks');
		} else {
			alert('Error trying to send email. Try again later 😔');
		}
		isSending = false;
	}
</script>

<div class="container mx-auto px-3 | xs:px-3 md:px-6">
	<Form bind:email bind:message bind:name bind:subject {isSending} onSubmit={sendEmail} />
</div>
