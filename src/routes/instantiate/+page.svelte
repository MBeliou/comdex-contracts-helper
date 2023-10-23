<script lang="ts">
	import { HACKATHON_MEMO } from '$lib/constants';
	import { Walletguard } from '$lib/components/ui/authguard';
	import { Button } from '$lib/components/ui/button';
	import { Input, FileInput } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { SIGNING_CLIENT, USER_ADDRESS } from '$lib/state';
	import { toBase64 } from '@cosmjs/encoding';
	import toast from 'svelte-french-toast';
	import { superForm } from 'sveltekit-superforms/client';
	import { instantiateFormSchema } from './schema';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';

	let files: FileList | null = null;
	let encodedProgram: string | null = null;

	$: (async () => {
		if (files && files.length > 0) {
			const content = await files.item(0)!.arrayBuffer();
			encodedProgram = toBase64(new Uint8Array(content));
		} else {
			encodedProgram = null;
		}
	})();

	async function instantiateSmartContract() {
		const { codeID, instantiateMessage, label, adminAddress } = $form;

		const instantiation = $SIGNING_CLIENT!.instantiate(
			$USER_ADDRESS!,
			Number(codeID),
			instantiateMessage,
			label,
			'auto',
			{
				memo: HACKATHON_MEMO,
				admin: adminAddress
			}
		);

		toast.promise(instantiation, {
			loading: 'Sending Transaction...',
			success: (val) => {
				return `Instantiated at ${val.contractAddress}`;
			},
			error: (err) => {
				return `Something went wrong.\n ${err}`;
			}
		});
	}
	export let data;

	const { form, errors, enhance, constraints } = superForm(data.form, {
		validators: instantiateFormSchema
	});

	$: formSchema = data.form;
</script>

<section>
	<h1 class="text-3xl font-bold">Instantiate</h1>
	<p class="mt-1 text-sm text-muted-foreground">Instantiate a Smart Contract</p>
</section>

<div class="mt-6">
	<Walletguard address={$USER_ADDRESS}>
		<div slot="auth">
			<form
				on:submit|preventDefault={(e) => {
					instantiateSmartContract();
				}}
				class="p-4 space-y-6 border rounded-md"
			>
				<div>
					<Label for="code-id">Code ID</Label>
					<Input
						name="code-id"
						class="mt-1"
						{...$constraints}
						bind:value={$form.codeID}
						type="number"
					/>
					<span class="mt-1 text-sm">Code ID to instantiate</span>
				</div>
				<div>
					<Label for="label">Label</Label>
					<Input
						name="label"
						class="mt-1"
						{...formSchema.constraints.label}
						bind:value={$form.label}
					/>
					<span class="mt-1 text-sm">A legible name for your contract instance</span>
				</div>
				<div>
					<Label for="admin-address">Admin Address</Label>
					<Input
						name="admin-address"
						class="mt-1"
						{...formSchema.constraints.adminAddress}
						bind:value={$form.adminAddress}
					/>
					<span class="mt-1 text-sm">The contract's admin has special rights</span>
				</div>
				<div>
					<Label for="instantiate-message">Instantiation Message</Label>
					<Textarea
						name="instantiate-message"
						class="mt-1"
						{...formSchema.constraints.instantiateMessage}
						bind:value={$form.instantiateMessage}
					/>
					<span class="mt-1 text-sm">Usually contains the startup info for the contract</span>
				</div>

				<Button class="">Instantiate Contract</Button>
			</form>
		</div>
	</Walletguard>
</div>
