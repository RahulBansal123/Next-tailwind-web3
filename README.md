<h2 align="center">Next.js Tailwind Web3 template</h2>

<p align="center"><b>⚡ Next.js + Tailwind + Redux + web3 ultimate starter template </b></p>

This is a basic Ethereum dapp that uses Next.js and Tailwind with Redux integration. This repository also includes a custom metamask login with the functionality to deploy the smart contracts on the polygon mumbai chain.

### Quick start

The first things you need to do is clone repo.

To deploy contracts on polygon testnet:

Create .secret at the root of your project with your private key

Now run the following commands:

```bash
yarn add -g truffle
truffle deploy --network=matic --reset
```

Run the client

```bash
yarn
yarn run dev
```

#### Project Structure

```
├── abis          // All abis of deployed contracts
│    ├── Contract.json
├── components          // All components required in the client
├── containers          // Containers of the Next.js pages
│    ├── auth           // container of /auth
│    ├── main           // container of /
├── contracts           // All solidity files
│    ├── Migration.sol  // Contract to keep track of the migrations
│    ├── Contract.sol
├── hooks               // Hooks for the client
│    ├── usePrevious.js
├── lib                 // Library
│    ├── getContract.js // Retrive the contract instance from its ABI
│    ├── Web3Container.js // Adds the HOC to every page
├── migrations            // Contains the script to deploy the contracts
│    ├── 1_initial_migration.js
│    ├── 2_deploy_contracts.js
├── pages              // All pages of nextjs
│    ├── _app.js
│    ├── _document.js
│    ├── auth.js
│    ├── index.js
├── public             // contains static files
│    ├── assets
├── .gitignore
├── package.json
└── README.md
```
