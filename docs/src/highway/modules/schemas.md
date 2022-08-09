---
title: Overview
id: overview
displayed_sidebar: modulesSidebar
---

# Application Schemas
## Introduction
The Sonr Schema module is used to store the records of verifiable objects for a specific application powered by the Sonr Network. Schemas are used to create custom application protcols which can be asserted on in order to verify your application data. Application data uploaded through `motors` can verify their data model through `Schemas`.

## Overview
Schemas are implemented on the `IPLD Object Model` which allows developers to register specific application data schemas. see [here](https://ipld.io/docs/schemas)

## Concepts

### Schema Definition
A `Schema Definition` is used to describe an application Schema that will be stored for later assertion against. the provided `Schema Definition` is then used to Derive both the `WhatIs` and `Schema Reference` that will be recorded on chain. Schemas comply to the `IPLD Object` specification. 

```tex
- ('string') creator                     : The Account Address signing this message
- ('string') label                      : Identifier or description of the schema
- ('list<SchemaKindDefinition>') fields : // Map of the initial property names to their IPLD types
```
---
Fields contained within the `SchemaDefinition` are described below:
Each field reperesents an `ipld` see [here](https://ipld.io/docs/schemas/features/typekinds/)
```go
// Represents the types of fields a schema can have
enum SchemaKind {
  INVALID = 0;
  LIST = 2;
  BOOL = 4;
  INT = 5;
  FLOAT = 6;
  STRING = 7;
  BYTES = 8;
  LINK = 9;
  ANY = 13;
}
```
### What Is records
A `ScehamReference` is used to store information about a `ScehmaDefinition` on our blockchain. This is stored within what is called a `WhatIs` record. Which holds infromation describing the registered Schema.

```tex
- ('string') did                    : DID is the DID of the object
- ('SchemaReference') schema        : Object_doc is the object document
- ('string') creator                : Creator is the DID of the creator
- ('int') timestamp                 : Timestamp is the time of the last update of the DID Document
- ('bool') IsActive                 : IsActive is the status of the DID Document
- ('map<string, string>') metadata  : Metadata is a map of key-value pairs that can be used to store additional information about the WhatIs (Schema)

```

### Schema Reference
A `Schema Reference` is used to repersent off chain information related to the `Schema` being registered. This is held within the `WhatIs` record that is written to the chain. A `Schema Reference` helps in retrieving a `Schema` Which is held within other storage.

```tex
- ('string') did    : The DID for this schema
- ('string') label  : An name for the schema
- ('string') cid    : A reference to information stored within an IPFS node.
```


# Usage

When creating a schema, the following data will be defined upfront

```tex
('string') label    : string repersenting the schema, used for readbility purposes

```