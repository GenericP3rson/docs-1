---
title: Overview
---
# Schemas
## Introduction
The Sonr Schema module is used to store the records of verifiable objects for a specific application powered by the Sonr Network. Schemas are used to create custom application protcols which can be asserted on in order to verify your application data. Application data uploaded through `Motor` can verify their data model through `Schemas`.

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
Each field reperesents an `IPLD` Kind. more information can be found [here](https://ipld.io/docs/schemas/features/typekinds/).

Currently, there is support the following `types` while complex types, unions, nullable fields, and optional properties are not supported we are working to comply with the full `IPLD` type system.
```go
  LIST
  BOOL
  INT
  FLOAT
  STRING
  BYTES
  LINK
```

The following are the numeric values which are used in our `protocol` layers.
```go
  LIST = 0
  BOOL = 1
  INT = 2
  FLOAT = 3
  STRING = 4
  BYTES = 5
  LINK = 6
```
# Link types and combining Schemas
A `Link` refers to a schema by `cid` which allows users to reuse schemas as properties on other schema definitions. here we will model a simple schema with nested content.
**Example**
```json
{
  "foo": Link 
}
```
where the `Link` is a `cid` in this example the `Link` is to the following schema
```json
{
  "bar": STRING
}
```
the following `Object` is using the first schema in the example would like this:
```json
{
  "foo": {
    "bar": "hello-world"
  }
}
```
**Note** when using links, links cannot yet be used within lists.
### What Is records
A `ScehamReference` is used to store information about a `ScehmaDefinition` on our blockchain. This is stored within what is called a `WhatIs` record. Which holds information describing the registered Schema.

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

    // a reference to information stored within an IPFS node.
    string cid
}
```

### Examples
The following are example Schemas and [Objects](./objects.md) which outline how types declared within a schema map to the objects which are defined from them.
below are two examples: An User Account, and 
### User Account

```json
{
  "user": STRING,
  "email": STRING,
  "timestamp": INT,
  "lastSeen": INT,

}
```
here we have an object which matches the above schema
```json
{
  "username": "snr1d8cjuwkssr9uzf8zllkmmn0ekv6p7a7yuz2dp",
  "email": "example@example.com",
  "lastSeen": 1661220968,
}
```
----
The following is an example schema for a `Pet`
##### Schema
```json
{
  "name": STRING, 
  "breed": STRING, 
  "age": INT,
  "owner": STRING
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
    "eyes",
    "ears",
    "nose",
    "mouth"
  ]
}
```