import type { PageLoad } from './$types';

export const load = (async ({ parent, params }) => {
	const cascade = await parent();
	const codeID = parseInt(params.id);
	const { codeInfo, data } = await cascade.queryClient.wasm.getCode(codeID);
	const deployedContracts = await cascade.queryClient.wasm.listContractsByCodeId(codeID);
	return {
		code: {
			...codeInfo,
			data,
			deployedContracts: deployedContracts.contracts
		}
	};
}) satisfies PageLoad;
