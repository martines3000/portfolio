---
title: endorse.fun
created: '2024-07-09T11:00:00.000Z'
updated: '2024-07-09T11:00:00.000Z'
summary: 'EES (Ethereum Endorsement Service) is a decentralized platform empowering users to endorse and financially support one another, fostering a transparent social graph and reputation system.'
tags: ['Web3', 'TheGraph', "Reputation"]
ogImage: 'local:ees.png'
website: 'https:/endorse.fun'
repository: 'https://github.com/lutralabs/ees'
---

# EES

**Ethereum Endorsement Service (EES)** is an innovative **on-chain social endorsement and tipping service** designed to build a comprehensive **social graph** and establish a reliable **reputation layer of Web3.**

EES encourages users and entities (such as teams and projects) to **endorse** and **tip** each other. Endorsements and tips build a Web of Trust and reward anybody who makes meaningful contributions to the Web3 space.

Unlike other systems, users are not limited to endorsing specific blockchain addresses; EES enables users to endorse social media accounts (ENS, Warpcast, Lens), GitHub accounts as well as repositories of projects. This allows for a cross-platform reputation that enhances discovery and trust.

Every endorsement is recorded on-chain, fostering a **transparent and trustless ecosystem**. Endorsements build a **Social Graph**, which is essential for entity discovery & gives valuable insights into **the network dynamics, influence patterns, and collaborative potential within the Web3 community**. Every participant in the Social Graph is assigned a reputation score based on endorsements made and received, effectively acting as a holistic reputation layer.

## Endorsement flow

![Diagram of the endorsement flow](/images/ees-flow.png)

## Demo

![Diagram of the endorsement flow](/images/ees-demo.gif)

## Tecnologies used

- **Frontend**: [Next.js](https://nextjs.org/)
- **Indexer**: [TheGraph](https://thegraph.com/)
- **Smart Contracts**: [Solidity](https://soliditylang.org)
- [Ethereum Attestation Service](https://attest.org/)

## Other information

- Most of the frontend uses server components, which makes data fetching easier and also more secure. This also helps us protect the API keys for paid services we use, such as the[ Airstack API](https://airstack.xyz/) and the Graph network.  
- We use a revalidation time of 1 day for things that update less frequently, like profile information, and 60 seconds for things that update more frequently, like endorsement received and endorsement count.
- For smart contract development we used both [Hardhat](https://hardhat.org/) and [Foundry](https://github.com/foundry-rs/foundry). The primary reason for this is that Foundry provides a more efficient and streamlined local development setup, while Hardhat facilitates the deployment of smart contracts.
- We use the Coinbase API for obtaining the USD/ETH quota and accessing the Base blockchain node.
- The architecture of the frontend makes it easy to add support for additional networks in the future (Optimism, Polygon).

## Features

### Profile view

![Profile view](/images/ees-profile.png)

### Explorer view

![Explorer view](/images/ees-explorer.png)

### Endorsement view

![Endorsement view](/images/ees-endorsement.png)

### Social Graph

![Social graph](/images/ees-social-graph.png)
