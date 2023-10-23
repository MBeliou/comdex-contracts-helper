<script lang="ts">
	import CodeEditor from '$lib/components/CodeEditor/CodeEditor.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import Spinner from '$lib/components/ui/spinner/Spinner.svelte';
	import * as Tabs from '$lib/components/ui/tabs';

	export let data;

	let contractAddress: string = 'comdex14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9spunaxy';
	let query = '{}';

	let queryResponse: Promise<any> | null = null;
	async function queryContract() {
		try {
			const content = JSON.stringify(JSON.parse(query));
			queryResponse = data.queryClient.wasm.queryContractSmart(contractAddress, JSON.parse(query));
		} catch (error) {
			let err = error as Error;

			queryResponse = Promise.reject(err.message);
		}
	}
</script>

<div class="">
	<div class="flex-grow-0">
		<form class="flex items-end gap-4" on:submit|preventDefault={queryContract}>
			<div class="flex-grow">
				<Label for="contract-address">Contract Address</Label>
				<Input
					name="contract-address"
					type="text"
					placeholder="contract address"
					class="flex-grow"
					required
					bind:value={contractAddress}
				/>
			</div>

			<div class="">
				<Button>Query</Button>
			</div>
		</form>
	</div>
	<div class="mt-8">
		<Tabs.Root value="query" class="">
			<Tabs.List class="grid w-full grid-cols-2">
				<Tabs.Trigger value="query">Query</Tabs.Trigger>
				<Tabs.Trigger value="base-64">Base64 Message</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="query" class="h-[200px]">
				<!-- <Textarea bind:value={query} class="min-h-[200px]"></Textarea> -->
				<CodeEditor bind:content={query} />
			</Tabs.Content>
			<Tabs.Content value="base-64" class="h-[200px] max-w-full border break-words p-4">
				{btoa(query)}
			</Tabs.Content>
		</Tabs.Root>
	</div>
	<div class="mt-8">
		<Tabs.Root value="response" class="">
			<Tabs.List class="grid w-full grid-cols-2">
				<Tabs.Trigger value="response">Response</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="response">
				<Card.Root>
					<Card.Content class="pt-6">
						{#if queryResponse}
							{#await queryResponse}
								<Spinner />
							{:then resolved}
								<pre class="whitespace-pre-line">
									{JSON.stringify(resolved, undefined, 4)}
                                </pre>
							{:catch err}
								{err}
							{/await}
						{:else}
							<div class="text-sm text-center">Waiting for a query</div>
						{/if}
					</Card.Content>
				</Card.Root>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
