---
title: traintickets.to
description: The beta version of our web app puts UK rail tickets on the blockchain using an ERC-721 compliant smart contract. Find out how you can purchase tickets using Ethereum's in-built crypto-currency, Ether
layout: post
image: /assets/img/a-step-towards-decentralized-travel-tickets/traintickets.to.png
---

Planar Network's [traintickets.to](https://traintickets.to) web app brings UK rail to the [Ethereum](https://ethereum.org/) blockchain. Users can purchase train tickets using Ethereum's in-built crypto-currency: Ether. 
{: .article-headline}

[![traintickets.to](/assets/img/a-step-towards-decentralized-travel-tickets/traintickets.to.png){: .img-responsive }](https://traintickets.to)
*traintickets.to - decentralized UK rail tickets*

## How it works

Selling a travel ticket is a four step process: querying, retailing, creation (fulfilment) and storage. In order to complete these steps traintickets.to uses three components: an Ethereum smart contract, a website and a retailer API.

### 1) Querying

The website sends a request to the retailer API for journey and fare information. The retailer API finds relevant results and signs them using the private key of its Ethereum account.

The results are displayed on the website. After selecting a result, the user purchases a ticket by executing the contract through the website.

![querying](/assets/img/a-step-towards-decentralized-travel-tickets/1.png){: .img-responsive .article-image }

### 2) Retailing

The website executes the contract using the web3 client library to send the selected result, signature and necessary funds to the contract.

The contract verifies the signature provided by the retailer API to ensure that the retailer offered this ticket at the given price. Assuming the verification was a success, a ticket is created and assigned to the user. The funds are transferred from the user to the retailer instantly and atomically, so there can be no tickets created without paying the retailer.

![retailing](/assets/img/a-step-towards-decentralized-travel-tickets/2.png){: .img-responsive .article-image }

### 3) Ticket creation

Although the ticket has been created and stored on the blockchain, real world rail systems do not query the blockchain (yet), so the retailer needs to fulfil the ticket.

All tickets purchased get put into the fulfilment queue of the retailer that signed them. The retailer API polls this queue and updates the ticket with the collection reference after it has been fulfilled.

![creation](/assets/img/a-step-towards-decentralized-travel-tickets/3.png){: .img-responsive .article-image }

The fulfilment information is a string so it is possible to provide other methods of fulfilment.

### 4) Storage

The user can then query the contract for their collection reference through the website or another third party app.

The website and retailer API are specific to [traintickets.to](https://traintickets.to/), but the contract is not. Other retailers can integrate their own website and API to sell tickets using the contract, allowing customers to purchase tickets from multiple websites and have all their tickets in a single wallet.

![storage](/assets/img/a-step-towards-decentralized-travel-tickets/4.png){: .img-responsive .article-image }

### Source code

All Planar Network's code is available on [github](https://www.github.com/planarnetwork/):
 
- [Smart contract](https://www.github.com/planarnetwork/ticket-wallet/) - ERC-721 contract written in Solidity
- [Web app](https://www.github.com/planarnetwork/traintickets.to/) - React web app written in TypeScript
- [Retailer API](https://www.github.com/planarnetwork/uk-rail-provider/) - Node.js signing service 

## Try it out

You can try out [traintickets.to](https://traintickets.to/) today. It's currently in beta and operating on the Ropsten network. While it is connected to real industry systems, any tickets retailed will not be available for collection at the station as it is in test mode.

[MetaMask](https://www.metamask.io/) is required to complete transactions. If you don't have a Ropsten account or MetaMask you can watch this video of how it works.

<iframe width="560" height="315" src="https://youtube.com/embed/3ARnwIaVtac" frameborder="0" allowfullscreen></iframe>{: .center-block }
