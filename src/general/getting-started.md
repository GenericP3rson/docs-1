---
title: Getting Started
---

# Getting Started

## Overview
Sonr is a distributed, L1 network. We believe data should be owned and trusted by its creator. We also believe infrastructure powering applications should not be in the hands of one single entity. Sonr empowers It's developers, and application users with inverting the data ownership model back to them. While also giving the assurance that we are not the only ones who can run the services needed to keep Sonr functional. While we are not planning on going anywhere, we think the internet is better when others are empowered with these tools as well.

Currently, there are three primary components of the Sonr network:
  - Blockchain Nodes
  - Motor Nodes
  - Storage Nodes
### Blockchain Nodes
The Sonr blockchain is the backbone of the L1 network. 

### Motor Nodes
Motor nodes are in eccense, clients of our `Blockchain` all motor targets wrap implementations to interface with our network to allow convient and streamlined interfaces that are consistent across implementations.

### Storage Nodes
Sonr's persistent storage is powered by [IPFS](../services/ipfs.md) which allows us to store data in a decentralized manner. Essentially IPFS is a file system, and allows data to be replicated accross nodes which are linked as `peers`. Creating a routing table for data to be retrieved.

### Interfacing with the network

- [Speedeway](./../speedway/overview.md)
  - Speedway is a content maangement tool for viewing your different resources stored on Sonr. See [here](./../speedway/overview.md) to learn more.

- [Motor-SDK](./../motor-sdk/overview.md)
  - The programmatic interface of Sonr. See [here](./../motor-sdk/android/overview.md) to learn more.


## Creating an account.
The first thing you will want to do is create an account. This will allow you to be authenticated and perform operations on the network.

```bash
speedway account register
```

Once you 