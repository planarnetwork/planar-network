---
title: A step towards decentralized ticketing
date: 2018-08-03 06:00
lastmod: 2018-08-03 06:00
description: The beta release of traintickets.to gives us the first glimpse of what decentralized travel ticketing will bring.
layout: post
---

[Traintickets.to](https://traintickets.to/), the first rail ticketing system built on a blockchain, has launched it's public beta. It represents the first step towards [decentralized travel ticketing](https://planar.network/).
{: .article-headline}

[![traintickets.to](/assets/img/a-step-towards-decentralized-travel-tickets/traintickets.to.png){: .img-responsive }](https://traintickets.to)
*traintickets.to - decentralized UK rail tickets*

Underpinning traintickets.to is an [Ethereum](https://ethereum.org/) smart contract that retails and stores train tickets for all UK operators. Purchases through traintickets.to are made using Ether, Ethereum's in-built currency.  

The contract is an implementation of the [ERC-721 standard](http://erc721.org/) where each ticket is a [non-fungible token](https://en.wikipedia.org/wiki/Non-fungible_token). As it conforms to the ERC-721 standard any tickets purchased can be viewed in a compatible third party wallet.

This is the first instance of an open, portable ticket wallet for UK rail tickets.

The decentralized nature of the blockchain means that any UK rail retailer can sell tickets through the contract. For the first time customers can purchase tickets from multiple retailers and have all the tickets in a single wallet.

## How it works

Selling a travel ticket is a four step process: querying, retailing, creation (fulfilment) and storage. In order to complete these steps traintickets.to uses three components: an Ethereum smart contract, a website and a retailer API.

## The next step

Traintickets.to has achieved decentralization of retailing and storage. The retailer API currently relies on a downstream API to query fares and create tickets.

Decentralizing the fares query process is challenging because of the sheer amount of data. In the UK alone there are over 100 million rail fares when you account for all the stations, ticket types and railcard discounts. It's possible that blockchain [performance improvements](https://medium.com/coinmonks/scaling-solutions-on-ethereum-explained-d970b66e28e5) or [fare simplifications](https://www.bbc.co.uk/news/uk-44032015) will make this more feasible, but both look some way off.

Decentralizing the creation of UK rail tickets is achievable, but it relies on a purely digital ticket standard. The UK has four different digital ticket standards, none of which are widely supported. The most promising is the e-ticket ticket standard which uses an Apple pkpass file with an Aztec barcode. The payload for the pkpass and Aztec barcode could be generated "on-chain" by the contract, which would tie together retailing, creation and storage into a single atomic operation. The problems caused by non-atomic retailing, creation and storage of tickets are are outlined in the [Planar Network whitepaper](/assets/docs/whitepaper.pdf).

![e-tickets](/assets/img/a-step-towards-decentralized-travel-tickets/e-ticket.png){: .img-responsive .center-block }
*UK rail e-ticket*{: .center .center-block}

The UK government has [provided £80 million](https://www.gov.uk/government/news/government-plans-80-million-smart-ticketing-rail-revolution) to speed up the adoption of electronic tickets making decentralized ticket creation the next logical step.

All UK rail ticketing systems need accreditation as a form of trust, and until all these steps can be decentralized that will continue to be the case. In the meantime, we'll continue with accreditation and aim to provide customers with live train tickets by the end of the year.

## Try it out

You can try out [traintickets.to](https://traintickets.to/) today. It's currently in beta and operating on the Ropsten network. While it is connected to real industry systems, any tickets retailed will not be available for collection at the station as it is in test mode.

[MetaMask](https://www.metamask.io/) is required to complete transactions. If you don't have a Ropsten account or MetaMask you can watch this video of how it works.

<iframe width="560" height="315" src="https://youtube.com/embed/3ARnwIaVtac" frameborder="0" allowfullscreen></iframe>{: .center-block }
