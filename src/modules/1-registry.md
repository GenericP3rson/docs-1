---
title: Overview
---
# Registry
The Sonr registry module is used to store the records of user accounts and applications. Each record contains a [DIDDocument](https://www.w3.org/TR/did-core/) which allows users to leverage the power of the DID specification in order to create verifiable and unique users on the Sonr network. 

## Overview

The record type utilized in the **Registry module** is the `WhoIs` type. We manage user's `DID Documents` in this `WhoIs` document which allows for your `Wallet Address` to be associated with the user's Document. This creates a powerful relationship where credentials and services can be tied to an entity which also handles your `Wallet Adredss`. Below is an example of a `WhoIs` document

## Registry and the Vault
When a new `WhoIs` is created on the sonr network, we first create `shards` of keys which will be used to verify the user against a `secret` which will decrypt your shards and verify against a publicly shared key. these shards are kept in a remote store and are created when you first create an account. Once these shards are created the passphrase must be provided to decrypt, and verify that the shards belong to your `WhoIs` an endpoint for retrieving `shards` are stored within the `DID Document` as a `Service endpoint` (see did specification for more info).

## Webauthn Credentials
Soon, [Webauthn](https://webauthn.io/) credentials will be supported, allowing you to register credentials that can be verified for account access.

## Aliases
Soon, Aliases for `Domains` will be supported, allowing users to associate their `DID` with a domain name.