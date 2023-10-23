<script lang="ts">
	import {
		HACKATHON_MEMO,
	} from '$lib/constants';
	import { Walletguard } from '$lib/components/ui/authguard';
	import Label from '$lib/components/ui/label/label.svelte';
	import { SIGNING_CLIENT, USER_ADDRESS } from '$lib/state.js';
	import toast from 'svelte-french-toast';
	import Button from '$lib/components/ui/button/button.svelte';
	import { FileInput } from '$lib/components/ui/input';

	export let data;

	async function storeContractCode() {
		const contractContent = await files?.item(0)?.arrayBuffer();
		if (contractContent) {
			const upload = $SIGNING_CLIENT!.upload(
				$USER_ADDRESS!,
				new Uint8Array(contractContent),
				'auto',
				HACKATHON_MEMO
			);

			toast.promise(upload, {
				loading: 'Sending Transaction...',
				success: (val) => {
					return `Uploaded under code ${val.codeId}`;
				},
				error: (err) => {
					return `Something went wrong.\n ${err}`;
				}
			});
		} else {
			toast.error('Invalid contract file');
		}
	}
	let files: FileList | null = null;
</script>

<section>
	<h1 class="text-3xl font-bold">Contract Storage</h1>
	<p class="mt-1 text-sm text-muted-foreground">Store a compiled Smart Contract on chain</p>
</section>

<div class="mt-6">
	<Walletguard address={$USER_ADDRESS}>
		<div slot="auth">
			<form on:submit|preventDefault={storeContractCode} class="p-4 space-y-6 border rounded-md">
				<div class="flex flex-col w-full gap-1.5">
					<Label for="file">Compiled Contract File</Label>
					<FileInput
						id="file"
						bind:files
						type="file"
						class="max-w-xl mt-1"
						multiple={false}
						accept=".wasm"
					/>
					<p class="text-sm text-muted-foreground">Select a Smart Contract file (.wasm)</p>
				</div>

				<div class="flex items-end justify-end">
					<Button type="submit" disabled={!files}>Upload Contract</Button>
				</div>
			</form>
		</div>
	</Walletguard>
</div>
