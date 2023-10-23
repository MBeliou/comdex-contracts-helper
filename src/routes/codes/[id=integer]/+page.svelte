<script lang="ts">
	import { page } from '$app/stores';
	import * as Card from '$lib/components/ui/card';
	import { getPermission, getPermissionedAddresses } from '$lib/utils';

	export let data;
	$: contract = data.code;
	$: permission = getPermission(contract.instantiatePermission);
	$: addresses = contract.instantiatePermission
		? getPermissionedAddresses(contract.instantiatePermission)
		: null;

	$: contracts = data.code.deployedContracts;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title class="break-all">Code ID {$page.params.id}</Card.Title>
		<Card.Description class="break-all">
			<span class="text-xs">Uploaded by</span>
			{contract.creator}
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="">
			<div class="text-lg font-medium capitalize">
				<span class="text-sm">Restricted to</span>
				{permission}
			</div>

			{#if addresses}
				<div class="text-sm">
					{#each addresses as address}
						{address}
					{/each}
				</div>
			{/if}
		</div>
	</Card.Content>
</Card.Root>

<Card.Root class="mt-8">
	<Card.Header class="border-b">
		<Card.Title class="break-all">
			Code {$page.params.id} was deployed {contracts.length} times
		</Card.Title>
	</Card.Header>

	<Card.Content>
		<ul class="grid pt-6 divide-y">
			{#if contracts.length > 0}
				{#each contracts as c}
					<li class="py-2">{c}</li>
				{/each}
			{:else}
				<div class="text-sm text-center text-muted-foreground">No deployment found</div>
			{/if}
		</ul>
	</Card.Content>
</Card.Root>
