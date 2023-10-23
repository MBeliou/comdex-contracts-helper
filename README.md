# Comdex Contract Helper
This contract helper is a web interface built to interact with the Comdex Blockchain and its smart contracts.


This web interface:
- Allows connection using Keplr wallet (includng network recommendation for comdex)
- Lists all code IDs available on the network
- Lists all contracts deployed from a code ID
- Allows the storage of a Smart Contract wasm file
- Allows the instantiation of a smart contract
- Allows an unauthentified user to query any smart contract on-chain, with a helpful error message if the query message is malformed 


## Getting Started
```bash
pnpm install

pnpm dev
```

Navigate to localhost:5173 
