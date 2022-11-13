<script lang="ts">
	export let name: string, label: string, placeholder: string, value: string;
	export let isLongText = false;
	export let isRequired = false;
</script>

<div class="flex flex-col mb-8 flex-1">
	<label class="self-start text-md font-semibold mb-1" for={name}>{label}</label>

	{#if !isLongText}
		<input
			class={`transistion duration-[250ms] outline-none rounded-sm self-start w-full max-w-full py-3 px-5 font-medium bg-white focus:drop-shadow-md md:flex-1 ${
				isLongText && 'h-32'
			}`}
			type="text"
			{name}
			id={name}
			{placeholder}
			bind:value
			required={isRequired}
		/>
	{/if}
	{#if isLongText}
		<textarea
			class={`transistion duration-[250ms] outline-none rounded-sm self-start w-full max-w-full py-3 px-5 bg-white focus:drop-shadow-md h-64 font-medium`}
			{name}
			id={name}
			{placeholder}
			bind:value
			required={isRequired}
		/>
	{/if}
</div>
