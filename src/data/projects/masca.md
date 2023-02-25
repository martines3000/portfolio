---
title: SSI Snap
created: '2023-02-23T08:00:00.000Z'
summary: 'SSI Snap is a MetaMask Snap that adds support for SSI: it can manage DIDs, store VCs, and create the VPs. SSI Snap works on existing MetaMask accounts to create new DIDs, without the need to create new private keys and worry about their security!'
tags: ['SSI', 'Web3', 'MetaMask']
ogImage: 'local:masca_2.png'
website: 'https://blockchain-lab-um.github.io/ssi-snap-docs/'
repository: 'https://github.com/blockchain-lab-um/ssi-snap/tree/develop'
---

# SSI Snap

SSI Snap is a MetaMask Snap that adds support for SSI: it can manage decentralized identifiers (DIDs), store verifiable credentials (VCs), and create the verifiable presentations (VPs). It is designed to be blockchain-agnostic. SSI Snap works on existing MetaMask accounts (which are already DIDs of some methods) and their private keys to create new DIDs, without the need to create new private keys and worry about their security!

For more information, be sure to check out our captivating blog posts on our [Medium page](https://medium.com/@blockchainlabum)!

## Tecnologies used

- **Framework:** [Veramo](https://github.com/uport-project/veramo)
- **Bundler:** [Webpack](https://webpack.js.org/)
- **Language:** [Typescript](https://www.typescriptlang.org/)
- **Build system:** [Nx](https://nx.dev/)
- **Code analysis:** [SonarCloud](https://www.sonarsource.com/products/sonarcloud/)
- **Other:** [MetaMask Flask](https://metamask.io/flask/)

## Other apps

We are actively developing apps and building demos to support our existing project and showcase the full range of functionalities it offers. Some of the apps and demos are:

- Configuration Dapp built using [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Issuer built with [NestJS](https://nestjs.com/) and based on [OpenID for Verifiable Credential Issuance Specs](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html)
- Verifier built with [NestJS](https://nestjs.com/) and based on [OpenID for Verifiable Presentations spec](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html)
- Simple demo issuer built with [React.js](https://reactjs.org/) and [Express](https://expressjs.com/)
- We also built a demo where we integrated our SSI Snap to work with the DAO governance platform [snapshot](https://docs.snapshot.org/).
