---
title: Registry
displayed_sidebar: highwaySidebar
---
# Registry
The Sonr registry module is used to store the records of user accounts and applications. Each record contains a DIDDocument and additional WebAuthn credential information.

## Overview

The record type utilized in the **Registry module** is the `WhoIs` type. This type provides both an interface to utilize WebAuthn credentials and a means to access the record's DIDDocument.


## Decentralized Identifiers (DIDs) Usage:

> A library to parse and generate W3C [DID Documents](https://www.w3.org/TR/did-core/) and W3C [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/).

Creation of a simple DID Document which is its own controller and contains an AssertionMethod.

```go
didID, err := did.ParseDID("did:snr:123")

// Empty did document:
doc := &did.Document{
    Context:            []did.URI{did.DIDContextV1URI()},
    ID:                 *didID,
}

// Add an assertionMethod
keyID, _ =: did.ParseDIDURL("did:snr:123#key-1")

keyPair, err := ecdsa.GenerateKey(elliptic.P256(), rand.Reader)
verificationMethod, err := did.NewVerificationMethod(*keyID, did.JsonWebKey2020, did.DID{}, keyPair.Public())

// This adds the method to the VerificationMethod list and stores a reference to the assertion list
doc.AddAssertionMethod(verificationMethod)

didJson, _ := json.MarshalIndent(doc, "", "  ")
fmt.Println(string(didJson))

// Unmarshal of a json did document:
parsedDIDDoc := did.Document{}
err = json.Unmarshal(didJson, &parsedDIDDoc)

// It can return the key in the convenient lestrrat-go/jwx JWK
parsedDIDDoc.AssertionMethod[0].JWK()

// Or return a native crypto.PublicKey
parsedDIDDoc.AssertionMethod[0].PublicKey()

```

Outputs:

```json
{
  "assertionMethod": ["did:snr:123#key-1"],
  "@context": "https://www.w3.org/ns/did/v1",
  "controller": "did:snr:123",
  "id": "did:snr:123",
  "verificationMethod": [
    {
      "controller": "did:snr:123",
      "id": "did:snr:123#key-1",
      "publicKeyJwk": {
        "crv": "P-256",
        "kty": "EC",
        "x": "UANQ8pgvJT33JbrnwMiu1L1JCGQFOEm1ThaNAJcFrWA=",
        "y": "UWm6q5n1iXyeCJLMGDInN40bkkKr8KkoTWDqJBZQXRo="
      },
      "type": "JsonWebKey2020"
    }
  ]
}
```

## Status Codes

```tex
200 - SUCCESS
300 - MULTIPLE CHOICE
304 - NOT MODIFIED
400 - BAD REQUEST
401 - NOT AUTHORIZED
```


