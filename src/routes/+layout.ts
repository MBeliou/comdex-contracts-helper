import { StargateClient, setupStakingExtension } from '@cosmjs/stargate';
import type { LayoutLoad } from './$types';
import { HttpBatchClient, Tendermint37Client } from '@cosmjs/tendermint-rpc';
import { QueryClient } from '@cosmjs/stargate';
import { CosmWasmClient, setupWasmExtension } from '@cosmjs/cosmwasm-stargate';
import { PUBLIC_CHAIN_RPC } from '$env/static/public';
import { decodeTxRaw } from '@cosmjs/proto-signing';
import { fromBase64, fromUtf8 } from '@cosmjs/encoding';
import { MsgExecuteContract, MsgInstantiateContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx';
import type { CodeInfoResponse } from 'cosmjs-types/cosmwasm/wasm/v1/query';
import { get, writable } from 'svelte/store';


//const backup_rpc = 'https://comdex-rpc.polkachu.com/';
//const rpc = "https://rpc-comdex.imperator.co";

export const load = (async () => {
	console.log(PUBLIC_CHAIN_RPC)
	const batchClient = new HttpBatchClient(PUBLIC_CHAIN_RPC);
	const tendermint = await Tendermint37Client.create(batchClient);

	const stargateClient = await StargateClient.create(tendermint);
	const queryClient = QueryClient.withExtensions(
		tendermint,
		setupWasmExtension,
		setupStakingExtension
	);
	const cosmwasmClient = await CosmWasmClient.create(tendermint);

	const queryNextContractCodes = (() => {
		let currentPaginationKey: Uint8Array | undefined = new Uint8Array();
		const knownContracts: CodeInfoResponse[] = [];
		let count = 0;
		return {
			getNext: async () => {
				const query = await queryClient.wasm.listCodeInfo(currentPaginationKey);
				currentPaginationKey = query.pagination?.nextKey;
				knownContracts.push(...query.codeInfos);

				count = query.pagination?.total.toNumber() ?? knownContracts.length;

				return query.codeInfos;
			},
			knownContracts: () => knownContracts,
			count: () => count
		};
	})();

	await queryNextContractCodes.getNext();

	return {
		stargateClient,
		queryClient,
		contracts: queryNextContractCodes
	};
}) satisfies LayoutLoad;
