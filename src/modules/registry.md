---
title: Overview
---
# Registry
The Sonr registry module is used to store the records of user accounts and applications. Each record contains a [DIDDocument](https://www.w3.org/TR/did-core/) which allows users to leverage the power of the DID specification in order to create verifiable and unique users on the Sonr network. 

## Overview

The record type utilized in the **Registry module** is the `WhoIs` type. We manage user's `DID Documents` in this `WhoIs` document which allows for your `Wallet Address` to be associated with the user's Document. This creates a powerful relationship where credentials and services can be tied to an entity which also handles your `Wallet Adredss`. Below is an example of a `WhoIs` document

## Registry and the Vault
When a new `WhoIs` is created on the sonr network, we first create `shards` of keys which will be used to verify the user against a `secret` which will decrypt your shards and verify against a publicly shared key. these shards are kept in a remote store and are created when you first create an account. Once these shards are created the passphrase must be provided to decrypt, and verify that the shards belong to your `WhoIs` an endpoint for retrieving `shards` are stored within the `DID Document` as a `Service endpoint` (see did specification for more info).

### WhoIs
```go
message WhoIs {
  // Alias is the list of registered `alsoKnownAs` identifiers of the User or Application
  Alias[] alias = 1;

  // Owner is the top level DID of the User or Application derived from the multisignature wallet.
  string owner = 2;

  // DIDDocument is the bytes representation of DIDDocument within the WhoIs. Initially marshalled as JSON.
  DIDDocument did_document = 3;

  // Credentials are the biometric info of the registered name and account encoded with public key
  repeated string controllers = 4;

  // Type is the kind of the entity. Possible values are: "user", "application"
  WhoIsType type = 5;

  // Timestamp is the time of the last update of the DID Document
  int64 timestamp = 6;

  // IsActive is the status of the DID Document
  bool is_active = 7;

  // Metadata is a map of key-value pairs that can be used to store additional information about the DID Document
  map<string, string> metadata = 8;
}
```

### WhoIs Types
```go
// WhoIsType is the type of DIDDocument stored in the registry module
// User is the type of the registered name
USER = 0;

// Application is the type of the registered name
APPLICATION = 1;
```

### DID Document Representation

```go
message DIDDocument {
  string[] context = 1; // optional
  string id = 2;
  string[] controller = 3; //optional
  VerificationMethod[] verification_method = 4; // optional
  string[] authentication = 5; // optional
  string[] assertion_method = 6; // optional
  string[] capability_invocation = 7; // optional
  string[] capability_delegation = 8; // optional
  string[] key_agreement = 9; // optional
  Service service = 10; // optional
  string[] also_known_as = 11; // optional
}
```

## Webauthn Credentials
Soon, [Webauthn](https://webauthn.io/) credentials will be supported, allowing you to register credentials that can be verified for account access.

## Aliases
Soon, Aliases for `Domains` will be supported, allowing users to associate their `DID` with a domain name.



