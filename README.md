# Decentralized election aplication built on Ethereum blockchain


## This project is an Ethereum-based application which allows to hold an election. Smart contract is written in Solidity, front-end is built with Next.js framework and uses The Graph to read data from the blockchain. Here are the main features of this app:

* The contract sets deployer as an election admin.
* Election admin control election process. He can add voters, candidates, start and stop election.
* Only authorised voters have right to vote.
* Election admin control when election is open.

## This Dapp goal is to allow some centralized entity to hold en election with easily verifiable results. Thanks to blockchain technology any attems of fraud are impossible.

## This repository contains subgraph code. For front-end and smart contract code see links below

* ### [Election smart contract code](https://github.com/Marabunta12/election-DApp)
* ### [Election front-end code](https://github.com/Marabunta12/election-DApp-frontend)

# Getting Started

### 1. Create subgraph via Subgraph Studio. Follow instructions from [The Graph documentation](https://thegraph.com/docs/en/cookbook/quick-start/)
### 2. After you initialize your subgraph update `schema.graphql` and `election.ts` files so they are same as those in this repository
### 3. In `subgraph.yaml` update startBlock e.g. 1 block before contract creation
### 4. Then you can deploy your subgraph

## License

[MIT](https://choosealicense.com/licenses/mit/)

