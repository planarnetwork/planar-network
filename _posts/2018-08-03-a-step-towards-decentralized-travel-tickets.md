---
title: A step towards decentralized ticketing
date: 2018-08-03 06:00
lastmod: 2018-08-03 06:00
description: The beta release of traintickets.to gives us the first glimpse of what decentralized travel ticketing will bring.
layout: post
---

<div class="pull-right">
<a href="https://traintickets.to">
![traintickets.to](/assets/img/a-step-towards-decentralized-travel-tickets/traintickets.to.png)
</a>
*traintickets.to - decentralized UK rail tickets*
</div>

[Traintickets.to](https://traintickets.to/), the first rail ticketing system built on a blockchain, has launched it's public beta. It represents the first step towards [decentralized travel ticketing](https://planar.network/), as outlined in an [earlier post](https://ljn.io/posts/blockchain-transport/).

Underpinning traintickets.to is an [Ethereum](https://ethereum.org/) smart contract that retails and stores train tickets for all UK operators. Purchases through traintickets.to are made using Ether, Ethereum's in-built currency.  

The contract is an implementation of the [ERC-721 standard](http://erc721.org/) where each ticket is a [non-fungible token](https://en.wikipedia.org/wiki/Non-fungible_token). As it conforms to the ERC-721 standard any tickets purchased can be viewed in a compatible third party wallet.

This is the first instance of an open, portable ticket wallet for UK rail tickets.

The decentralized nature of the blockchain means that any UK rail retailer can sell tickets through the contract. For the first time customers can purchase tickets from multiple retailers and have all the tickets in a single wallet.

## How it works

Selling a travel ticket is a four step process: querying, retailing, creation (fulfilment) and storage. In order to complete these steps traintickets.to uses three components: an Ethereum smart contract, a website and a retailer API.

### 1) Querying

The website sends a request to the retailer API for journey and fare information. The retailer API finds relevant results and signs them using the private key of its Ethereum account.

<div markdown="1">
![querying](/assets/img/a-step-towards-decentralized-travel-tickets/1.png)
</div>

The results are displayed on the website. After selecting a result, the user purchases a ticket by executing the contract through the website.

### 2) Retailing

The website executes the contract using the web3 client library to send the selected result, signature and necessary funds to the contract.

The contract verifies the signature provided by the retailer API to ensure that the retailer offered this ticket at the given price. Assuming the verification was a success, a ticket is created and assigned to the user. The funds are transferred from the user to the retailer instantly and atomically, so there can be no tickets created without paying the retailer.

<div markdown="1">
![retailing](/assets/img/a-step-towards-decentralized-travel-tickets/2.png)
</div>

### 3) Ticket creation

Although the ticket has been created and stored on the blockchain, real world rail systems do not query the blockchain (yet), so the retailer needs to fulfil the ticket.

All tickets purchased get put into the fulfilment queue of the retailer that signed them. The retailer API polls this queue and updates the ticket with the collection reference after it has been fulfilled.

<div markdown="1">
![creation](/assets/img/a-step-towards-decentralized-travel-tickets/3.png)
</div>

The fulfilment information is a string so it is possible to provide other methods of fulfilment.

### 4) Storage

The user can then query the contract for their collection reference through the website or another third party app.

<div markdown="1">
![storage](/assets/img/a-step-towards-decentralized-travel-tickets/4.png)
</div>

The website and retailer API are specific to [traintickets.to](https://traintickets.to/), but the contract is not. Other retailers can integrate their own website and API to sell tickets using the contract, allowing customers to purchase tickets from multiple websites and have all their tickets in a single wallet.

The code for the [contract](https://www.github.com/planarnetwork/ticket-wallet/), [website](https://www.github.com/planarnetwork/traintickets.to/) and [retailer API](https://www.github.com/planarnetwork/uk-rail-provider/) are all open source and available on [GitHub](https://www.github.com/planarnetwork).

## The next step

Traintickets.to has achieved decentralization of retailing and storage. The retailer API currently relies on a downstream API to query fares and create tickets.

<div markdown="1" style="width: 230px;">
![e-tickets](/assets/img/a-step-towards-decentralized-travel-tickets/e-ticket.png)
*UK rail e-ticket*
</div>

Decentralizing the fares query process is challenging because of the sheer amount of data. In the UK alone there are over 100 million rail fares when you account for all the stations, ticket types and railcard discounts. It's possible that blockchain [performance improvements](https://medium.com/coinmonks/scaling-solutions-on-ethereum-explained-d970b66e28e5) or [fare simplifications](https://www.bbc.co.uk/news/uk-44032015) will make this more feasible, but both look some way off.

Decentralizing the creation of UK rail tickets is achievable, but it relies on a purely digital ticket standard. The UK has four different digital ticket standards, none of which are widely supported. The most promising is the e-ticket ticket standard which uses an Apple pkpass file with an Aztec barcode. The payload for the pkpass and Aztec barcode could be generated "on-chain" by the contract, which would tie together retailing, creation and storage into a single atomic operation. The problems caused by non-atomic retailing, creation and storage of tickets are are outlined in the [Planar Network whitepaper](https://planar.network/resources/whitepaper.pdf).

The UK government has [provided £80 million](https://www.gov.uk/government/news/government-plans-80-million-smart-ticketing-rail-revolution) to speed up the adoption of electronic tickets making decentralized ticket creation the next logical step.

All UK rail ticketing systems need accreditation as a form of trust, and until all these steps can be decentralized that will continue to be the case. In the meantime, we'll continue with accreditation and aim to provide customers with live train tickets by the end of the year.

## Try it out

You can try out [traintickets.to](https://traintickets.to/) today. It's currently in beta and operating on the Ropsten network. While it is connected to real industry systems, any tickets retailed will not be available for collection at the station as it is in test mode.

[MetaMask](https://www.metamask.io/) is required to complete transactions. If you don't have a Ropsten account or MetaMask you can watch this video of how it works.

<iframe width="560" height="315" src="https://youtube.com/embed/3ARnwIaVtac" frameborder="0" allowfullscreen></iframe>
