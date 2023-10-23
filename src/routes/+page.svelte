<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { getPermission, getPermissionedAddresses } from '$lib/utils';
	import { AccessType, AccessConfig } from 'cosmjs-types/cosmwasm/wasm/v1/types.js';
	import { ArrowUpRight, Link2Icon } from 'lucide-svelte';

	export let data;

</script>

<h2 class="text-xl font-semibold">
	{data.contracts.count()} stored codes found
</h2>
<ul class="grid gap-6 mt-6">
	{#each data.contracts.knownContracts() as contract}
		{@const permission = getPermission(contract.instantiatePermission)}
		{@const addresses = contract.instantiatePermission
			? getPermissionedAddresses(contract.instantiatePermission)
			: null}
		<li>
			<Card.Root>
				<Card.Header>
					<Card.Title class="break-all">Code ID {contract.codeId.toNumber()}</Card.Title>
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
				<Card.Footer class="flex justify-end">
					<Button variant="link" href="/codes/{contract.codeId.toNumber()}"
						>View More <ArrowUpRight class="w-4 h-4 ml-0.5" /></Button
					>
				</Card.Footer>
			</Card.Root>
		</li>
	{/each}
</ul>
