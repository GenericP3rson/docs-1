---
title: Objects

position_in_sidebar: 3
---

Documents are data persisted within an off chain storage network and given a content identifier, which represents the object in the network, not kept on the `blockchain`. When uploading an object for storage, there must be validation against a [schema](/docs/intro/modules/schemas.mdx) in order to match in both property name, and type.

# Defining Documents
Objects are represented as `JSON`. Which makes it simple to define objects quickly. Support for JSON is found within most modern IDE and Code editors. However, depending on the [motor-sdk](/docs/guides/setup.mdx) target you are using, there will be different ways of representing object data.


# Example of an Document definition
In this section we will define an example scenario with a comment on a social media post. Below is the [schema](/docs/intro/modules/schemas.mdx) for our social media comment.

```json
{
    "from": {
      "kind":  "STRING",
    },
    "payload":{
      "kind":  "STRING",
    },
    "timestamp":{
      "kind":  "INT",
    },
    "to": {
        "kind": "LIST",
        "list_kind:": {
            "kind": "STRING"
        }
    },
    "active":{
        "kind": "BOOL"
    },
}
```

Above we can see the following:

- `from` contains an example `Address` which is an account which made this comment.
- `payload` contains the actual data of the comment.
- `timestamp` contains the time (in unix epoch format) the comment was made.
- `to` contains a list of who may view this comment.
- `active` denotes if the given comment is still viewable

Next we will Create a Document with the schema above.

```json
{
    "from": "snr1d8cjuwkssr9uzf8zllkmmn0ekv6p7a7yuz2dpc",
    "payload": "First!",
    "timestamp": 1662057089,
    "to": ["snr1d8cjuwkssr9uzf8zllkmmn0ekv6p7a7yuz2dpd", "snr1d8cjuwkssr9uzf8zllkmmn0ekv6p7a7yuz2dpd"],
    "active": true,


}
```

## Storing Documents
When an object is stored, it will be given its Identifier (`cid`) and `DID` which are their identifier on the Sonr network. When an object is stored the following result is returned:

```json
{
	"Code": 200,
	"Reference": {
		"Did": "did:snr:QmUNQTCBPEjWJgR8F4UJp4CTDejXXgR4bobAXdE8w4L6g7",
		"Label": "Message#1",
		"Cid": "bafyreidmlmqnkxtpxs5dwqvphwfq3x54awbypnapm2bmroa6s5g7s2ejt4"
	},
	"Message": "Document Uploaded"
}
```

# Storage/Referencing
 It should be noted that once an Document is stored. The `cid` must be associated with a [bucket](/docs/intro/modules/buckets.mdx) to be retrievable. Buckets allow objects to be searched upon by schema, and meta-data. Currently (9/1/2022), only searching by a schema is supported, but indexing of buckets is expected soon.

## Usage

- See [Bucket](/docs/intro/modules/buckets.mdx) for more information on how Objects can be related to other objects.
- See [Speedway](/docs/tools/speedway/cli.mdx) documentation on usage of objects through our management tooling.
- See [Motor-SDK](/docs/guides/data/documents.mdx) documentation in our SDK targets.
- Read [ADR-2](https://github.com/sonr-io/sonr/blob/dev/docs/architecture/2.md) for a more in depth technical explanation of the design decisions made for the Schema module.
