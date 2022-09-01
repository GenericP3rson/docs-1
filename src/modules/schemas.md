---
title: Overview
---
# Schemas
## Introduction
Schemas are used to create custom application protcols which can be asserted on in order to verify your application data. Application data uploaded through `motor` can verify their data model through `Schemas`.

## Overview
Schemas are implemented on the `IPLD Object Model` which allows developers to register specific application data schemas. See [IPLD Schema documentation](https://ipld.io/docs/schemas)

## Concepts

### Schema Kind Defintion
Schema's declare the intended type of a property though IPLD Type `KIND` Each `KIND` is mapped to the name of a property. Each property defined must map to one of the given `IPLD` `KINDS`
### Schema Definition
A `Schema Definition` is used to describe an application Schema that will be stored for later assertion against. the provided `Schema Definition` is then used to Derive both the `WhatIs` and `Schema Reference` that will be recorded on chain. Schemas comply to the `IPLD Object` specification.
```go
message SchemaDefinition{
  // The Account Address signing this message
  string creator

  // Identifier or description of the schema
  string label

  // collection of schemaKindDefinitions for construction of the schema
  list<SchemaKindDefinition> fields
}
```
---
Fields contained within the `SchemaDefinition` are described below:
Each field reperesents an `IPLD` can be found [here](https://ipld.io/docs/schemas/features/typekinds/).

Currently there is support the following `types` while complex types, unions, nullable fields, and optional properties are not supported we are working to comply with the full `IPLD` type system.
```go
  LIST
  BOOL
  INT
  FLOAT
  STRING
  BYTES
  LINK
```
**Note**: When using arrays, all properties must be of the same type, and of one of the supported in the above list.
### What Is records
A `ScehamReference` is used to store information about a `ScehmaDefinition` on the blockchain. This is stored within what is called a `WhatIs` record. Which holds infromation describing the registered Schema.

```go
message WhatIs {
  // DID is the DID of the object
  string did

  // Object_doc is the object document
  SchemaReference schema

  // Creator is the DID of the creator
  string creator

  // Timestamp is the time of the last update of the DID Document
  int64 timestamp

  // IsActive is the status of the DID Document
  bool is_active

  // collection of user defined items indended for indexing purposes
  map<string,string> metadata
}
```

### Schema Reference
A `Schema Reference` is used to repersent off chain information related to the `Schema` being registered. This is held within the `WhatIs` record that is written to the chain. A `Schema Reference` helps in retrieving a `Schema` Which is held within other storage.

```go
message SchemaReference{
    // the DID for this schema
    string did

    // an alternative reference point
    string label

    // a reference to information stored within IPFS.
    string cid
}
```

### Examples
### User Account

```json
{
  "username": STRING,
  "email": STRING,
  "timestamp": INT,
  "lastSeen": INT,

}
```

```json
{
  "username": "Bob Smith",
  "email": "example@example.com",
  "createdAt": 1661220968,
  "lastSeen": 1661220968,
}
```
----
The following is an example schema for an `NFT`
##### Schema
```json
{
  "description": STRING, 
  "image": STRING, 
  "name": STRING,
  "attributes": LIST
}
```
The following object would be a valid definition for the above `Schema`

##### Object
```json
{
  "description": "Friendly Creature", 
  "image": "ipfs://QmZWD55U2SDp9uQ5m8hS77EdavpnatTcBMDAkEEKnPWGbn", 
  "name": "My NFT",
  "attributes": [
    {
      "trait_type": "eyes",
      "value": "cute",
    },
    {
      "trait_type": "eyes",
      "value": "big",
    }
  ]
}


