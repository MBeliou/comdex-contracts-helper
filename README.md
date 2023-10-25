# Comdex Contract Helper
This contract helper is a web interface built to interact with the Comdex Blockchain and its smart contracts.


This web interface:
- Allows connection using Keplr wallet (includng network recommendation for comdex)
- Lists all code IDs available on the network
- Lists all contracts deployed from a code ID
- Allows the storage of a Smart Contract wasm file
- Allows the instantiation of a smart contract
- Allows an unauthentified user to query any smart contract on-chain, with a helpful error message if the query message is malformed 

The application is available and hosted [here](https://comdex-contracts-helper.vercel.app/)


## Getting Started
```bash
pnpm install

pnpm dev
```

Navigate to localhost:5173 


## Why use this application?
When developing smart contracts in Cosmos, you are usually required to download and install the chain binary in order to store, instantiate, query or execute a contract. This gets dicey fast as you start working on multiple chains, as you need to take into account key management, binary updates and support for your operating system.

By Creating a web application, you're able to get started and prototype faster, even for stakeholders that are less technically inclined or do not know the relevant CLI calls to explore contract state on chain