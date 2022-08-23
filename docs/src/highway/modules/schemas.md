# Schemas
## Introduction
The Sonr Schema module is used to store the records of verifiable objects for a specific application powered by the Sonr Network. Schemas are used to create custom application protcols which can be asserted on in order to verify your application data. Application data uploaded through `motor` can verify their data model through `Schemas`.

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
A `ScehamReference` is used to store information about a `ScehmaDefinition` on our blockchain. This is stored within what is called a `WhatIs` record. Which holds infromation describing the registered Schema.

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

# Messages


### `CreateSchema(SchemaDefinition)`
Register's a new type definition for a given application. this type defention is then asserted against when uploading content

```go
{
    Creator string
    Label   string
    fields  []SchemaKindDefinition
}
```

- `Creator` The identifier of the application the schema is registering for
- `Label` The human readable description of the schema

Returns a `WhatIs`

---

### `DeprecateSchema(MsgDeprecateSchema)`
Allows for Schemas to be depricated. Depricated schemas are still accessible but will allow developers to indicate it is no longer supported.
```go
{
  Creator string 
  Did string 
}
```

- `Creator` The Account Address Singing this message
- `DID`     The identifier of the Schema

Returns a `status code` and `message` detailing the operation.

## Query Methods
Query methods are used for accessing state kept within the `Keeper`
### `QuerySchema`
For cases it is dersired to lookup a Schema Definition for verifying on an uploaded object.

```go
{
    Creator string
    Did     string
}
```
- `Creator` identifier of the schema owner which will be a `Application`
- `DID` identifier of the schema being queried for


Returns a `SchemaDefinition`

---
### `QueryWhatIs`
For cases where applications need to verify existing data, or verify a schema belongs to a certain `Creator`. `QueryWhatIs` should be used over `QuerySchema` when only verification of the data is needed.


```go
{
    Creator string
    Did     string
}
```
`
- `Creator` identifier of the schema owner which will be a `Application`
- `DID` identifier of the schema being queried for


Returns a `WhatIs`

### `QueryWhatIsByCreator`
For cases where applications need to query for all `WhatIs` records relating to a specific `Creator` Address.
Request can also contain `Pagination` which will be outlined in the response.
```go
{
    Creator string
}
```
Returns a List of `WhatIs` created by the given account.

### Examples

The following is an example schema for an `NFT`
##### Schema
```json
{
  "description": 7, 
  "image": 7, 
  "name": 7,
}
```
The following object would be a valid definition for the above `Schema`

##### Object
```json
{
  "description": "Friendly Creature", 
  "image": "ipfs://QmZWD55U2SDp9uQ5m8hS77EdavpnatTcBMDAkEEKnPWGbn", 
  "name": "My NFT"
}
```

The result of uploading an object will be a cid
example: `QmYYXVqZtxvQMaua978u9Gh6ByjvRXeonv89KgXNf7xBBs`


----
### User Account
